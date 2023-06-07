const express = require("express");
const app = express();

// This is for the database
const { seed } = require("./data/index");
const { Spell } = require("./models/Spell");
const { Wizard } = require("./models/Wizard");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { PORT, ACCESS_TOKEN_SECRET } = process.env;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Yohonna: get all wizards
app.get("/wizards", async (req, res) => {
  let wizard = await Wizard.findAll(req.params.id, {
    include: {
      model: Spell,
      as: "spells",
    },
  });
  res.send(wizard);
});

//Yohonna:get wizards by id
app.get("/wizards/:id", async (req, res) => {
  console.log(req.params.id);
  let wizard = await Wizard.findByPk(req.params.id, {
    include: {
      model: Spell,
      as: "spells",
    },
  });
  res.send(wizard);
});

//Yohonna:get spells by id
app.get("/spells/:id", async (req, res) => {
  console.log(req.params.id);
  let spell = await Spell.findByPk(req.params.id);
  res.send(spell);
});

//Yohonna:get all spells
app.get("/spells", async (req, res) => {
  let spell = await Spell.findAll(req.params.id);
  res.send(spell);
});

// Middleware is just functions that run between your request and response.
// Middleware needs to know if it's finished, "next" is the way to let the middleware know it's finished

// Ahn: Create custom middleware authUser

const authUser = async (req, res, next) => {
  const auth = req.header("Authorization");
  console.log("Auth: ", auth);

  if (!auth) {
    console.log("The user isn't authorized...");
    next(); // move on to the next function
  } else {
    // Array Deconstruction, we don't need the Bearer part, only need token
    const [, token] = auth.split(" "); // spliting the authentication string by space
    console.log("Token: ", token);
    if (token == null) return res.sendStatus(401);

    // Check the validity of the token
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
};

// Yohonna: POST /register
// TODO - takes req.body of { student_name, isStudent, isSuperUser, hogwartsHouse,password} and creates a new user with the hashed password
app.post("/register", async (req, res, next) => {
  try {
    let { student_name, isStudent, isSuperUser, hogwartsHouse, password } =
      req.body;
    //create the salt
    let salt = await bcrypt.genSalt(5);

    //use bcrypt to hash the password
    const hashedPw = await bcrypt.hash(password, salt);

    //add user to db
    let createdUser = await Wizard.create({
      student_name,
      isStudent,
      isSuperUser,
      hogwartsHouse,
      password: hashedPw,
    });
    console.log(createdUser);

    // Ahn: Create a token, To sign we must include: 1. The object  2. The secret
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

// Yohonna: Login
// Ahn: Add middleware as the second argument, authorization
app.post("/login", authUser, async (req, res, next) => {
  try {
    let { student_name, password } = req.body;
    let loginUser = await Wizard.findOne({
      where: { student_name },
    });

    // Authenticate the loginUser
    let isMatching = await bcrypt.compare(password, loginUser.password);
    if (isMatching) {
      // If True, the loginUser successfully logged in.
      //  Deconstructing the User Object by its properties/fields.
      const { id, student_name } = loginUser;
      let payload = { id, student_name };

      // Generate a token with payload and a secret
      const token = jwt.sign(payload, ACCESS_TOKEN_SECRET);
      res.send({ message: "Successful Login", token });
    } else {
      res.send("Please enter the correct password and try again.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//Kris POST routes
// Kris: POST new wizards
app.post("/wizards", authUser, async (req, res, next) => {
  const { isStudent } = req.body;
  if (!isStudent) {
    res.send({ message: "Not authorized!" });
  }
  try {
    const wizard = await Wizard.create(req.body);
    res.send(wizard);
  } catch (error) {
    next(error);
  }
});
//Kris: POST new spells
app.post("/spells", authUser, async (req, res, next) => {
  // const { isStudent } = req.body;
  // if (!isStudent) {
  //   res.send({ message: "Not authorized!" });
  // }
  try {
    const spell = await Spell.create(req.body);
    res.send(spell);
  } catch (error) {
    next(error);
  }
});

//Kris: PUT wizards
//Update a single item to the Wizard and Spell database by id
app.put("/wizards/:id", authUser, async (req, res, next) => {
  const { isStudent } = req.body;
  if (!isStudent) {
    res.send({ message: "Not authorized!" });
  }
  try {
    await Wizard.update(req.body, {
      where: { id: req.params.id },
    });
    let putWizards = await Wizard.findAll();
    res.json(putWizards);
  } catch (error) {
    next(error);
  }
});
//Kris: PUT Spells
app.put("/spells/:id", authUser, async (req, res, next) => {
  // const { isStudent } = req.body;
  // if (!isStudent) {
  //   res.send({ message: "Not authorized!" });
  // }
  try {
    await Spell.update(req.body, {
      where: { id: req.params.id },
    });
    let putSpells = await Spell.findAll();
    res.json(putSpells);
  } catch (error) {
    next(error);
  }
});

// Ahn: Delete wizard route 12/2/2022
// Ahn: Delete wizard only by the authorized loginUser who is a student  12/15/2022
app.delete("/wizards/:id", authUser, async (req, res, next) => {
  // const user = req.user;
  const { isStudent } = req.body;
  if (!isStudent) {
    res.send({ message: "Not authorized!" });
  }
  try {
    const userToDelete = await Wizard.findByPk(req.params.id);
    // Only authorized and isStudent user can delete
    // if (user.id == req.params.id && isStudent) {
    const deletedUser = await userToDelete.destroy();
    res.send(deletedUser);
    // } else {
    //   res.status(401).send("Not Authorized!");
    // }
  } catch (error) {
    next(error);
  }
});

// Ahn: Delete wizard route 12/2
// Ahn: Delete spell only by the authorized loginUser who is a student  12/15
app.delete("/spells/:id", authUser, async (req, res, next) => {
  // const { isStudent } = req.body;
  // if (!isStudent) {
  //   res.send("Not Authorized!");
  // }
  try {
    const spell = await Spell.findByPk(req.params.id);
    console.log("spell: ", spell);

    const deletedSpell = await spell.destroy();
    res.send(deletedSpell);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  seed();
  console.log(`App listening on http://localhost:${PORT}`);
});


//if registered they can log in and view all spells
//if a student then they can update/add/delete spells
//if not..."Not authorized"