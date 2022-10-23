const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const hiringManagerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minLength: 3,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
  },
  companyName: {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: 5,
      maxLength: 200,
    },
  },
  role: {
    type: String,
    required: ["true", "role is required"],
  },
  jobs: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: ObjectId,
      required: true,
      ref: "Job",
    },
  },
  imageURL: {
    type: String,
    validate: [validator.isURL, "Please provide a valid url"],
  },
  location: {
    type: String,
    lowercase: true,
    message: "{VALUE} is not  acorrect division!",
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
});

const HiringManager = mongoose.model("HiringManager", hiringManagerSchema);

module.exports = HiringManager;
