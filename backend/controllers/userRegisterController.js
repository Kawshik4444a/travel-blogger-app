const User = require("../models/userRegisterModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { generateaccessToken} = require("../utils/tokenUtils");
const dotenv = require("dotenv").config();

// Register Controller
const userRegisterController = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
    
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

// Login Controller
const userLoginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password user" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const accessToken = generateaccessToken(user.id);
    

    res.status(200).json({
      message: "Login successful",
      accessToken: accessToken,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login", error: error.message });
  }
});

module.exports = { userRegisterController, userLoginController };
