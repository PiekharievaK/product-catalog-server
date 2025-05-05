const admin = require("./firebaseAdmin");

const verifyFirebaseToken = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    console.warn("No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("Firebase token verified:", !!decodedToken);

    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name || "",
      picture: decodedToken.picture || "",
    };

    next();
  } catch (error) {
    console.error("Error verifying Firebase token:", error.message);
    return res.status(401).json({ message: "Invalid Firebase token" });
  }
};

module.exports = verifyFirebaseToken;
