const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const {
  User,
  userSignUpValidate,
  userLogInValidate,
} = require("../models/user");
const { verifyValidate } = require("../models/user");

// const appLink = "https://product-catalog-gamma-navy.vercel.app/";
const appLink = "http://localhost:5173";

const signup = async (req, res, next) => {
  const { error } = userSignUpValidate.validate(req.body);

  try {
    if (error) {
      throw new Error(error.message);
    }

    const { login, email } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser) {
      throw new Error("Email in use");
    }
    const hashPassword = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    );
    const password = hashPassword;

    const avatarURL = `https://i.ibb.co/S351TY1/profilepic9.png`;
    const verificationToken = v4();
    const user = await User.create({
      email,
      password,
      login,
      avatarURL,
      verificationToken,
      favourites: [],
      card: [],
    });

    res.status(201).json({
      user: {
        email,
        avatarURL: user.avatarURL,
        linkToVerify: `${appLink}/Verification#${verificationToken}`,
      },
    });
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

const login = async (req, res, next) => {
  console.log(process.env.SECRET_KEY);
  const { error } = userLogInValidate.validate(req.body);

  try {
    if (error) {
      console.log(error.message);
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error("Email or password is wrong");
    }

    if (!user.verify) {
      throw new Error(`Email is not verify`);
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    await User.findByIdAndUpdate(user._id, { token });

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        login: user.login,
        email: user.email,
      },
    });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};

const logout = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  console.log(authorization);
  try {
    await User.findByIdAndUpdate(req.user._id, { token: null });

    res.status(200).json();
  } catch (e) {
    res.status(400).json({ message: "Not found" });
  }
};

const current = async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }
    const { _id, login, email } = req.user;
    const token = jwt.sign({ id: _id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    await User.findByIdAndUpdate(_id, { token });
    res.status(200).json({
      data: {
        token,
        user: {
          _id: _id,
          login,
          email,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete({ _id: req.user._id });

    res.status(200).json();
  } catch (e) {
    res.status(400).json({ message: "Not found" });
  }
};

module.exports = {
  signup,
  login,
  logout,
  deleteUser,
  current,
};
