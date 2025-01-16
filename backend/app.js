const express = require('express');
const app = express();
const router = require("./routes/userRegisterRoutes");
const cors = require("cors");

const dotenv = require("dotenv").config();
const connectDb = require("./db/config.js");
const PORT = process.env.PORT || 6000;

// Update the CORS configuration
app.use(cors({
    origin: [
        "http://localhost:5173", // Local development frontend
        "https://statuesque-froyo-cf4ea9.netlify.app" // Deployed Netlify frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

connectDb();
app.use(express.json());
app.use("/api/app", router); // Goes to Router

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
