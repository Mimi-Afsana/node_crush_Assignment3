const HiringManager = require("../model/HiringManager");

const createManagerService = async (data) => {
  const result = await HiringManager.create(data);
  return result;
};

module.exports = {
  createManagerService,
};
