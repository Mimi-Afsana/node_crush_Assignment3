const express = require("express");
const hiringController = require("../controllers/hiring.controller");

const router = express.Router();

router.post("/", hiringController.hiringManager);

module.exports = router;
