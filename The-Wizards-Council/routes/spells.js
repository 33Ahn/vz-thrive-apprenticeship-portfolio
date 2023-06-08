// Express Boilerplate
const express = require("express");
const router = express.Router();

// Include middleware to parse body data from request
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Import the Spell Model and 'authUser' middleware
const { Spell } = require("../models");
const { authUser } = require("../middleware/authUser");

// Spells Route handlers
// GET  /spells
router.get("/", async (req, res, next) => {
  try {
    const spells = await Spell.findAll();
    res.send(spells);
  } catch (error) {
    next(error);
  }
});

// GET an individual Spell, :/id is a dynamic endpoint
// Retrieving a spell record by its ID using the GET method. It checks if the spell is found and sends it in the response. If the spell is not found, it sets the response status to 404 and passes the request to the next error-handling middleware.
router.get("/:id", authUser, async (req, res, next) => {
  try {
    const spell = await Spell.findByPk(req.params.id);

    if (!spell) {
      res.status(404);
      next(); // passes the request to the next error-handling middleware.
    } else {
      res.send(spell);
    }
  } catch (error) {
    next(error);
  }
});

// POST
router.post("/", authUser, async (req, res, next) => {
  try {
    const spell = await Spell.create(req.body);
    res.status(201).json(spell); // created
  } catch (error) {
    next(error); // the next() function is called with the error parameter to pass the control to the error handling middleware.
  }
});

// PUT
router.put("/:id", authUser, async (req, res, next) => {
  try {
    const spell = await Spell.findByPk(req.params.id);

    if (!spell) {
      res.status(404);
      return next();
    } else {
      // Check if the authenticated user's id matches the wizardId of the spell
      if (req.user.id !== spell.wizardId) {
        res.status(403).send("Forbidden");
        return;
      }

      await Spell.update(req.body);
      res.json(spell);
    }
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", authUser, async (req, res, next) => {
  try {
    const spellToDelete = await Spell.findByPk(req.params.id);

    if (spellToDelete) {
      // Check if the authenticated user's id matches the wizardId of the spell
      if (req.user.id !== spellToDelete.wizardId) {
        res.status(403).send("Forbidden");
        return;
      }

      const deletedSpell = await spellToDelete.destroy();
      res.json(deletedSpell);
    } else {
      res.status(404).json({ message: "Spell not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
