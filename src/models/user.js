const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    firebaseUid: {
      type: String,
      required: [true, "Login is required"],
    },
    login: {
      type: String,
      required: [true, "Login is required"],
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
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    favourites: {
      type: [String],
      default: [],
    },
    cart: {
      type: [{ id: String, count: Number }],
      default: [],
    },
    contacts: {
      phone: String,
      fullName: String,
      adress: {
        city: String,
        post: String,
        office: Number,
      },
    },
  },
  { timestamps: true }
);


const userSignUpValidate = Joi.object({
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  firebase: Joi.boolean().required(),
  password: Joi.string()
    .min(3)
    .max(30)
    .when("firebase", {
      is: false,
      then: Joi.required(),
      otherwise: Joi.optional().allow("", null),
    }),
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
