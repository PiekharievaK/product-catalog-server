const { User } = require("../models/user");
const admin = require("../middlewares/firebaseAdmin");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  try {
    const decodedFirebase = await admin.auth().verifyIdToken(token);
    console.log(decodedFirebase);
    let user = await User.findOne({ firebaseUid: decodedFirebase.uid });
    req.user = user ? user : decodedFirebase;
    return next();
  } catch (error) {
    console.error("Firebase auth error:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = { auth };
