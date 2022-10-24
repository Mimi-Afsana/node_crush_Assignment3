const Apply = require("../model/ApplyInformation");

const createApplyService = async (data) => {
  const output = await Apply.create(data);
  return output;
};

module.exports = {
  createApplyService,
};
