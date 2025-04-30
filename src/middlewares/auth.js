const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer") {
      throw new Error("Unauthorize");
    }
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    console.log(id);
    const user = await User.findById(id);
    // console.log(user)
    console.log(!!user, user.token, token, user.token !== token);
    if (!user || !user.token || user.token !== token) {
      console.log("Token mismatch!");
      throw new Error("Not authorized");
    }
    req.user = user;
    console.log(user);
    next();
  } catch (error) {
    if (
      error.message === "Invalid signature" ||
      error.message === "jwt malformed"
    ) {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = { auth };
