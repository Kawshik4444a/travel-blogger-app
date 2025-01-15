// models/Post.js
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String, // URL of the uploaded image stored in Cloudinary
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //image: { type: String }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
