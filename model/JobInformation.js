const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobInformationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 100,
  },
  companyName: {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 200,
    },
  },
  details: {
    type: Array,
  },
});

const JobInformation = mongoose.model("JobInformation", jobInformationSchema);

module.exports = JobInformation;
