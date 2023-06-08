// Express Boilerplate
const express = require("express");
const app = express();

// Port for the local server
require("dotenv").config();
const { PORT } = process.env;

// Middleware to parse incoming requests from html form and json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { seed } = require("./data/index");

// Tell it which routers to use
app.use("/wizards", require("./routes/wizards"));
app.use("/spells", require("./routes/spells"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));

// Bind the server to the port
app.listen(PORT, () => {
  seed();
  console.log(`App listening on http://localhost:${PORT}`);
});

