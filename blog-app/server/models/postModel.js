const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  //add for user / post connection
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    //to know which post belongs to which user
    ref: "User",
  },
  text: {
    type: String,
    required: [true, "Please add a text value"],
  },
  // title: {
  //   type: String,
  //   required: [true, "Please add a text value"],
  // },
  image: {
    type: String,
  },
});
//export it to post controller
module.exports = mongoose.model("Post", postSchema);
