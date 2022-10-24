const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const hiringManagerSchema = mongoose.Schema({
  detailsInfo: {
    id: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  },
  jobs: {
    name: {
      type: String,
      trim: true,
    },
    id: {
      type: ObjectId,
      ref: "Job",
    },
  },
});

const HiringManager = mongoose.model("HiringManager", hiringManagerSchema);

module.exports = HiringManager;
