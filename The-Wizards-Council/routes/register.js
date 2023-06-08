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

// Register -- Take the req.body of { student_name, isStudent, isSuperUser, hogwartsHouse,password} and creates a new user with the hashed password
router.post("/", async (req, res, next) => {
  try {
    const { student_name, isStudent, isSuperUser, hogwartsHouse, password } =
      req.body;

    //create the salt
    const salt = await bcrypt.genSalt(10);

    //use bcrypt to hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    //add user to db
    let createdUser = await Wizard.create({
      student_name,
      isStudent,
      isSuperUser,
      hogwartsHouse,
      password: hashedPassword,
    });
    console.log(createdUser);

    // Create a token, To sign we must include: 1. The object  2. The secret
    const token = jwt.sign(
      { id: createdUser.id, student_name: createdUser.student_name },
      ACCESS_TOKEN_SECRET
    );

    res.send({
      messge: `New wizard ${student_name} Successfully Registered`,
      token,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
