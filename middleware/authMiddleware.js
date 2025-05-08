const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_JWT_secret";

const protect = (req, res, next) => {
  const token = req.headers.authorisation?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorised" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = protect;
