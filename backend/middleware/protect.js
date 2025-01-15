const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {    //in authorization the syntax is Bearer <access token>
        return res.status(401).json({ message: "Unauthorized: No or invalid token provided" });
    }

    const token = authHeader.split(" ")[1];   //this will split the Bearer and accesstoken

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);  //verify using accesstoken //accessToken:31234567890!@#$%^&*()
        console.log("Decoded token:", decoded); //decoded has details of user
        req.details=decoded  //contains details of user
        req.user = decoded.userId; //extract userId from user details //req.user can be used anywhere after using middleware
        console.log("Decoded User ID:", req.user);
        next(); //middleware approves
    } catch (error) {
      
        if (error.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Unauthorized: Token has expired" });
        }
        return res.status(403).json({ message: "Forbidden: Invalid token" });
      }
};

module.exports = protect;
