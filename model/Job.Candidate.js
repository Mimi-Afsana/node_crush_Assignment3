const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schemama.Types;

const jobCandidateSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxlength: 100,
    lowercase: true,
    trim: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  applicant: [
    {
      jobId: { type: ObjectId, ref: "Job" },
      resume: String,
    },
  ],
});
