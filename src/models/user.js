const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
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
    favourites: {
      type: [String],
      default: [],
    },
    card: {
      type: [{ id: String, count: Number }],
      default: [],
    },
  },
  { timestamps: true }
);

const userSignUpValidate = Joi.object({
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(30).required(),
});
const userLogInValidate = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(3).max(30).required(),
});

const verifyValidate = Joi.object({
  email: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  userSignUpValidate,
  userLogInValidate,
  verifyValidate,
};
