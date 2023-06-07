//****when interacting with a DB will return a PROMISE --> ASYNC/AWAIT*** */
//- for err handling when use ASYNC/AWAIT --> TRY/CATCH
//- if don't want to use TRY /CATCH --> can use EXPRESS ASYNC HANDLER(install express-async-handler )
//wrap entire fs with asyncHandler

const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");
// @ description: Get posts
// @ route  GET /api/posts
// @ access Private(after will add authentication)
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.body.userId });
  console.log(posts);
  res.json(posts);
});

// @ description: Set posts
// @ route  POST /api/posts
// @ access Private(after will add authentication)
const setPost = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const post = await Post.create({
    image: req.body.image,
    text: req.body.text,
    user: req.body.userId,
  });
  res.json(post);
});

// @ description: Update post
// @ route  PUT /api/posts/:id
// @ access Private(after will add authentication)

const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id.trim(); // remove newline character
  const post = await Post.findById(postId);

  // check if id is provided
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // make sure you're not updating another user post
  const user = await User.findById(req.body.userId);
  // check for user
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  // make sure you're not updating another user post
  if (post.user.toString() !== user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updatedPost = await Post.findByIdAndUpdate(postId, req.body.data, {
    new: true,
  });
  res.json(updatedPost);
});

const deletePost = asyncHandler(async (req, res) => {
  let postId = req.params.id.trim();
  const post = await Post.findById(postId);

  if (!post) {
    res.status(400);
    throw new Error("Post not found!");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }

  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  post.text = post.text.trim();
  await post.remove();
  res.json({ id: postId });
});
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  console.log(posts);
  res.json(posts);
});

module.exports = {
  getAllPosts,
  getPosts,
  setPost,
  updatePost,
  deletePost,
};
