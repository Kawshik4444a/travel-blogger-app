const Post = require("../models/postModel");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create post with image upload
const createPost = async (req, res) => {
  const { title, description, location } = req.body;

  if (!title || !description || !location || !req.file) {
    return res.status(400).json({ message: "All fields and an image are required" });
  }

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blog_posts", // Optional: specify folder in Cloudinary
      resource_type: "image",
    });

    // Create post with Cloudinary URL
    const newPost = await Post.create({
      title,
      description,
      location,
      image: result.secure_url, // Store the image URL from Cloudinary
      user: req.user, // Assuming `req.user` is set by middleware
    });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Failed to create post", error: error.message });
  }
};

module.exports = { createPost };
