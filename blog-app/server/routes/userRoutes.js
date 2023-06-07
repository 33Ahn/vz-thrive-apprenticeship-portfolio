//userRoutes
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/usersController");
//import protect fs for protecting the route
const { protect } = require("../middleware/authmiddleware");
//when making a post request to / --> it's a registartion
//need to call our fs registerUser

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
