const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: [true, "Login is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      require: true,
      default: false,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    temporaryCode: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = { User };
