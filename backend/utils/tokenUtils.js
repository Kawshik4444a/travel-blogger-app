//file will generate the access token
const jwt = require("jsonwebtoken");


const generateaccessToken = (userId) => {
    return jwt.sign({ userId },process.env.JWT_SECRET, {
        expiresIn: "50m",
    });
};

module.exports = { generateaccessToken };
