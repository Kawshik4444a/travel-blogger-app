const Post = require("../models/postModel");

// Controller to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().select("title description image");
    res.status(200).json({
      message: "Posts fetched successfully",
      posts: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to fetch posts", error: error.message });
  }
};

module.exports = {
  getAllPosts,
};
