const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const applyInformationSchema = mongoose.Schema({
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
      lowercase: true,
      trim: true,
      minLength: 5,
      maxLength: 200,
    },
  },
  candidate: {
    name: {
      type: String,
      lowercase: true,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "User",
    },
  },
  jobInformation: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "JobInformation",
      required: true,
    },
  },
});

const ApplyInformation = mongoose.model(
  "ApplyInformation",
  applyInformationSchema
);

module.exports = ApplyInformation;
