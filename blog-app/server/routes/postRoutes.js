const express = require("express");
const router = express.Router();
//import fs from controllers folder for the logic

const {
  getPosts,
  setPost,
  updatePost,
  deletePost,
  getAllPosts,
} = require("../controllers/postscontroller");

// protected routes
const { protect } = require("../middleware/authmiddleware.js");

//chained routes on same path

router.route("/getAll").get(getAllPosts);
router.route("/").post(protect, setPost);
router.route("/get").post(protect, getPosts);
//============unchained routes on same path======
// router.get("/", getPosts);
// router.post("/", setPost);

//chained routes on same path
router.route("/:id").delete(protect, deletePost).put(updatePost);
//=======unchained routes on same path=======
// router.put("/:id", updatePost);
// router.delete("/:id", deletePost);

module.exports = router;
