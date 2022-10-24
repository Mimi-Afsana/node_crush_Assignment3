const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
  {
    postBy: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "HiringManager",
        required: true,
      },
    },
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: 3,
      maxLength: 200,
    },
    companyName: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: [5, "companyame at least 5 characters."],
      maxLength: [200, "companyame is too large"],
    },
    aboutCompany: {
      type: String,
    },
    qualification: {
      type: [String],
    },
    responsibility: {
      type: [String],
      required: [true, "Please details is required"],
    },
    skill: {
      type: [String],
      require: [true, "Please skill is required"],
    },
    salary: {
      type: String,
      required: [true, "Please salary is required"],
      min: [0, "job salary can not negative"],
    },
    location: {
      type: String,
      trim: true,
      enum: {
        values: ["Asia", "Malaysia", "China", "Europe", "London"],
        message:
          "{VALUE} is not accepted as location. Chose from Asia/Malaysia/Europe/London ",
      },
      required: [true, "Job location is required"],
    },
    dateLine: {
      type: Date,
      required: [true, "Please dateLine is required"],
    },
  },
  {
    timestamps: true,
  }
);

const JobInformation = mongoose.model("Job", jobSchema);

module.exports = JobInformation;
