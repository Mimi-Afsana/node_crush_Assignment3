const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const verify = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "failed",
        error: "You are not logged in",
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log(decoded);

    next();
  } catch (error) {
    res.status(403).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};

module.exports = verify;
