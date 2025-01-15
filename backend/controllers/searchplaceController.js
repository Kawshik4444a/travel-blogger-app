const Post = require("../models/postModel");

// Controller to search posts by location
const searchPosts = async (req, res) => {
  // Extract location from query parameters
  const { location } = req.query;

  // Ensure that a location is provided in the query
  if (!location) {
    return res.status(400).json({ message: "Location is required" });
  }

  try {
    // Search posts in the location field using regular expression for case-insensitive matching
    const posts = await Post.find({
      location: { $regex: location, $options: "i" } // 'i' for case-insensitive search
    });

    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this location" });
    }

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Error searching for posts", error: error.message });
  }
};

module.exports = {
  searchPosts,
};
