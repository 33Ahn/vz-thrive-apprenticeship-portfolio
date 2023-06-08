const jwt = require("jsonwebtoken");

require("dotenv").config();
const { ACCESS_TOKEN_SECRET } = process.env;

// Ahn: Create custom middleware authUser
const authUser = async (req, res, next) => {
  const auth = req.header("Authorization");
  console.log("Auth: ", auth);

  if (!auth) {
    console.log("The user isn't authorized...");
    return res.status(401).send();
  } else {
    // Array Deconstruction, we don't need the Bearer part, only need the token
    const [, token] = auth.split(" "); // spliting the authentication string by space and take the second part
    console.log("Token: ", token);
    if (token == null) return res.sendStatus(401);

    // Check the validity of the token
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // the token is invalid or expired 'Forbidden'
      // If the token is successfully verified, the user object extracted from the token is assigned to req.user
      req.user = user;
      next();
    });
  }
};

module.exports = { authUser };
