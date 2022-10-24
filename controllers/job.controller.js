const Job = require("../services/job.service");

const postJob = async (req, res) => {
  try {
    const service = req.body;
    const result = await Job.createJobService(service);
    res.status(200).json({
      status: "success",
      message: "create job is success",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

// all jobs
const getAllJobs = async (req, res) => {
  try {
    let filters = { ...req.query };

    if (req.query.salary) {
    }

    const jobs = await Job.getAllJobsService(filters);
    res.send(jobs);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

// get job by id

const getJobById = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.getJobServiceById(id);
    if (!job) {
      res.status(401).json({
        status: "failed",
        error: "no job is matched with this id",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

module.exports = {
  postJob,
  getAllJobs,
  getJobById,
};
