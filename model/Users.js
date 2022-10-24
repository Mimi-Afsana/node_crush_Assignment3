const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
var bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) => {
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          });
          message: "Password {VALUE} is not strong enough";
        },
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return (value === this.password);
        },
        message: "Password don't match",
      },
    },
    companyName: {
      name: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
      },
    },
    role: {
      type: String,
      required: ["true", "Please required role"],
      enum: ["user", "hiring manager", "admin"],
      default: "user",
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
