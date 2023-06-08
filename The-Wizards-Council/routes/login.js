const express = require("express");
const router = express.Router();

const { Wizard } = require("../models/Wizard");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { ACCESS_TOKEN_SECRET } = process.env;

// Include middleware to parse body data from request
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// For the login functionality, it verifies the user's credentials by comparing the entered password with the hashed password stored in the database using bcrypt.
// If the passwords match, a JSON Web Token (JWT) is generated and sent as a response.

// Login
router.post("/", async (req, res, next) => {
  try {
    const { student_name, password } = req.body;
    const loginUser = await Wizard.findOne({
      where: { student_name },
    });

    if (!loginUser) {
      res.status(404).send("User not found");
      return;
    }

    // If a matching user is found, compare the stored hashed password for the user with the provided password
    const isMatching = await bcrypt.compare(password, loginUser.password);
    if (isMatching) {
      // If True, the loginUser successfully logged in.
      //  Deconstructing the User Object by its properties/fields.
      const { id, student_name } = loginUser;
      const payload = { id, student_name };

      // If the passwords match, a JSON Web Token (JWT) is generated with a payload containing the user's id and student_name.
      const token = jwt.sign(payload, ACCESS_TOKEN_SECRET);
      res.send({ message: "Successful Login", token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error(error); // logs the error object to the console.
    next(error); // this function is called to pass the error to the next error-handling middleware. This allows the error to be propagated up the middleware chain and eventually handled appropriately.
  }
});

module.exports = router;
