const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  console.log("These are the headers", req.headers);
  let token;
  //verify if bearer exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from bearer header/ split turn token into arr, target the index of1 (token)
      token = req.headers.authorization.split(" ")[1];
      // vrify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //GET USER FROM TOKEN
      req.user = await User.findById(decoded.id).select("-password");

      // call next middleware
      next();
    } catch (err) {
      console.log(err);
      // not authorized
      res.status(401);
      throw new Error("Not authorized!");
    }
  }
  // if there is no token
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token!");
  }
});

module.exports = { protect };
