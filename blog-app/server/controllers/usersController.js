//======================
//=====================
//JWT - CONTINUE FROM HERE
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @ description: REGISTER new user
// @ route  POST  /api/users
// @ access Public

const registerUser = asyncHandler(async (req, res) => {
  //when send a req to API==> will have some body data -->destructure it
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields!");
  }

  // check if user exists already
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //check if user was created
  if (user) {
    res.status(201).json({
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
});

// @ description: LOGIN(AUTHENTICATE)  user
// @ route  POST  /api/users/login
// @ access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("login user");
  // check for user email
  const user = await User.findOne({ email });
  //====LOGIN======
  //compare passwords // send back same credentials
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("login user");
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }
});

// @ description: get user data
// @ route  GET  /api/users/me === get current user
// @ access Private

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

//generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
