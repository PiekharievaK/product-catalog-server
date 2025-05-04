const { User } = require("../models/user");

const signup = async (req, res) => {
  console.log(req);
  const { uid, email, name, picture } = req.user;

  if (!uid || !email) {
    console.warn("Missing uid or email from Firebase token");
    return res.status(400).json({ message: "Invalid Firebase user data" });
  }

  try {
    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        login: name || email,
        email,
        firebase: true,
      });
    }

    res.status(200).json({
      message: "Logged in via Firebase",
      user,
    });
  } catch (error) {
    console.error("Firebase login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  console.log("Login called");

  try {
    res
      .status(200)
      .json({ user: { email: req.user.email, login: req.user.email } });
  } catch (e) {
    console.error("Login error:", e);
    res.status(400).json({ message: "Login error" });
  }
};

const logout = async (req, res) => {
  console.log("Logout called");

  try {
    res.status(200).json({ message: "Logged out" });
  } catch (e) {
    console.error("Logout error:", e);
    res.status(400).json({ message: "Logout error" });
  }
};

const current = async (req, res) => {
  console.log("Current user request");

  if (!req.user) {
    console.warn("No user on request");
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { _id, login, email, avatarURL } = req.user;
  console.log("Authenticated user:", req.user);

  res.status(200).json({
    user: {
      _id,
      login,
      email,
      avatarURL,
    },
  });
};

const deleteUser = async (req, res) => {
  console.log(" Delete user request");

  try {
    await User.findByIdAndDelete(req.user._id);
    console.log(" User deleted:", req.user._id);
    res.status(200).json({ message: "User deleted" });
  } catch (e) {
    console.error("Delete  error:", e);
    res.status(400).json({ message: "Delete error" });
  }
};

const authWithGoogle = async (req, res) => {
  console.log("Login called");
  const { uid, displayName, email,  } = req.user;

  try {
    if (uid) {
      const user = await User.create({
        login: displayName || email,
        email,
        firebase: true,
        firebaseUid: uid,
      });
      res
      .status(200)
      .json({ user: { email: user.email, login: user.email } });
    }

    res
      .status(200)
      .json({ user: { email: req.user.email, login: req.user.email } });
  } catch (e) {
    console.error("google error:", e);
    res.status(400).json({ message: "google error" });
  }
};

module.exports = {
  login,
  logout,
  current,
  deleteUser,
  signup,
  authWithGoogle,
};
