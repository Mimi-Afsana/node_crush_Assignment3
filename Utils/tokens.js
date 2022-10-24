const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

const generateToken = (userInfo) => {
  const payload = { email: userInfo.email, role: userInfo.role };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
};

module.exports = generateToken;
