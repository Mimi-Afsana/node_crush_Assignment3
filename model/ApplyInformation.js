const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const applyInformationSchema = mongoose.Schema({
  applicant: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  jobInfo: {
    jobTypes: {
      type: String,
      require: true,
    },
    id: {
      type: ObjectId,
      ref: "JobInfo",
      required: true,
    },
  },
});

const Apply = mongoose.model("ApplyInformation", applyInformationSchema);

module.exports = Apply;
