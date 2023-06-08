// Express Boilerplate
const express = require("express");
const router = express.Router();

// Include middleware to parse body data from request
router.use(express.json())
router.use(express.urlencoded({extended: true}))

// Import Wizard Model and 'authUser' middleware
const { Wizard } = require("../models");
const { authUser } = require("../middleware/authUser")

// Set up routes for handling various CRUD operations (Create, Read, Update, Delete) on the Wizards model. It uses the Sequelize ORM (Object Relational Mapper) methods to interact with the database and sends appropriate responses based on the success or failure of the operations.

// Wizards Route handlers
// GET  /wizards
router.get("/", async (req, res, next) => {
  try {
    const wizards = await Wizard.findAll();
    res.send(wizards);
  } catch (error) {
    next(error);
  }
});

// GET an individual wizard, :/id is a dynamic endpoint
router.get("/:id", authUser, async (req, res, next) => {
  try {
    const wizard = await Wizard.findByPk(req.params.id);

    if (!wizard) {
      res.status(404);
      next(); // passes the request to the next error-handling middleware.
    } else {
      res.send(wizard);
    }
  } catch (error) {
    next(error);
  }
});

// POST - create a new user (wizard)
router.post("/", authUser, async (req, res, next) => {

  try {
    const wizard = await Wizard.create(req.body);
    res.send(wizard);
  } catch (error) {
    next(error);
  }
});

// PUT - update a user
router.put("/:id", authUser, async (req, res, next) => {
  try {
    const wizard = await Wizard.findByPk(req.params.id);

    if (!wizard) {
      res.status(404);
      next();
    } else {
      // Check if the authenticated user's id matches the requested wizard's id
      if (req.user.id !== wizard.id) {
        res.status(403).send("Forbidden");
        return;
      }

      await Wizard.update(req.body, { where: { id: req.params.id } });
      const updatedWizard = await Wizard.findByPk(req.params.id);
      res.send(updatedWizard);
    }
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete("/:id", authUser, async (req, res, next) => {
  try {
    const wizard = await Wizard.findByPk(req.params.id);

    if (!wizard) {
      res.status(404);
      next();
    } else {
      // Check if the authenticated user's id matches the requested wizard's id
      if (req.user.id !== wizard.id) {
        res.status(403).send("Forbidden");
        return;
      }

      await wizard.destroy();
      res.send(wizard);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
