const Job = require("../model/Job");

const createJobService = async (data) => {
  const output = await Job.create(data);
  return output;
};

const getAllJobsService = async (filter) => {
  const jobs = await Job.find(filter);
  return jobs;
};

module.exports = {
  createJobService,
  getAllJobsService,
};
