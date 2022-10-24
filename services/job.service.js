const Job = require("../model/Job");

const createJobService = async (data) => {
  const output = await Job.create(data);
  return output;
};

const getAllJobsService = async (filter) => {
  const jobs = await Job.find(filter);
  return jobs;
};

// job service by id
const getJobServiceById = async (id) => {
  const job = await Job.findOne({ _id: id }).populate("postBy.id");
  return job;
};

module.exports = {
  createJobService,
  getAllJobsService,
  getJobServiceById,
};
