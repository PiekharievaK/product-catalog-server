const express = require("express");
const ctrl = require("../controllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", ctrl.auth.signup);
router.post("/login", ctrl.auth.login);
router.get("/current", auth, ctrl.auth.current);
router.get("/logout", auth, ctrl.auth.logout);
router.delete("/delete", auth, ctrl.auth.deleteUser);
module.exports = router;
