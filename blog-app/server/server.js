const express = require("express");
//allow us to have a .env file
const cors = require("cors");
const dotenv = require("dotenv").config();
// mongoDB
const connectDB = require("./config/db");
//allow us to color important links we want to show off
const colors = require("colors");
//err handler
const { errorHandler } = require("../server/middleware/errorMiddleware");
//RREAD FROM .ENV
const PORT =
  process.env.PORT || "https://blog-server-production-27a6.up.railway.app";

//INIT EXPRESS
const app = express();

//mongoDB
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// connectection from frontend
app.use(
  cors({
    origin: "https://blog-client-io30.onrender.com",
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://blog-client-io30.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", 'http://localhost:5173');
  next();
});

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.yellow)
);
