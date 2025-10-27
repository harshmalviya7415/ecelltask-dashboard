const jwt = require("jsonwebtoken");

const authadmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "not authenticat" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log("hello")
  }
};

module.exports = { authadmin };
