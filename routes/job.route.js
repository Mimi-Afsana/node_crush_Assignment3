const express = require("express");
const jobController = require("../controllers/job.controller");
const applyController = require("../controllers/apply.controller");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/", verifyToken, jobController.postJob);
router.get("/", jobController.getAllJobs);

router.get("/:id", jobController.getJobById);
router.post("/:id/apply", applyController.apllyPost);

module.exports = router;
