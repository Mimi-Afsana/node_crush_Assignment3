const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
var bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: 4,
      maxLength: 100,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid Email"],
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          validator.isStrongPassword(value, {
            minLength: 5,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
          message: "Password is not strong enough.";
        },
      },
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validators: function (value) {
          return (value = this.password);
        },
        message: "2 password must be match",
      },
    },
    companyName: {
      name: {
        type: String,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 100,
      },
    },
    role: {
      type: String,
      required: ["true", "role is required"],
      enum: ["user", "Hiring Manager", "admin"],
      default: "user",
    },
    imageURL: {
      type: String,
      validate: validator.isURL,
    },
    location: {
      type: String,
      lowercase: true,
      trim: true,
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    consfirmationToken: String,
    consfirmationTokenExpires: Date,

    passwordChange: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;

  next();
});

userSchema.methods.comparePassword = function (password) {
  const isPasswordValid = bcrypt.compareSync(password, this.password);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
