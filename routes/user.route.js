const express = require("express");
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/signup", userController.signupUser);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);
router.get("/allusers", userController.getAllUsersData);

module.exports = router;
