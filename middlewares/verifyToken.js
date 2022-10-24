const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const verifyToken = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .json({ status: "Failed", error: "Authentication Required!" });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

module.exports = verifyToken;
