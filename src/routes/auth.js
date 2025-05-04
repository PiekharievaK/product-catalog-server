const express = require("express");
const ctrl = require("../controllers");
const verifyFirebaseToken = require("../middlewares/verifyFirebaseToken");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       201:
 *         description: User created
 *       409:
 *         description: Email in use
 */
router.post("/signup", auth, ctrl.auth.signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Email or password is wrong
*/
// router.post("/login", ctrl.auth.login);
router.post("/login", auth, ctrl.auth.login);

/**
 * @swagger
 * /auth/current:
 *   get:
 *     summary: Get current logged in user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user info
 *       401:
 *         description: Not authorized
 */
router.get("/current", auth, ctrl.auth.current);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout current user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       400:
 *         description: User not found
 */
router.get("/logout", auth, ctrl.auth.logout);

/**
 * @swagger
 * /auth/delete:
 *   delete:
 *     summary: Delete current user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted
 *       400:
 *         description: Deletion failed
 */
router.delete("/delete", auth, ctrl.auth.deleteUser);

router.post(
  "/firebase-login",
  auth,
  ctrl.auth.signup
);

module.exports = router;
// router.post("/signup", ctrl.auth.signup);
// router.get("/verify/:verificationToken", ctrl.auth.verify);
// router.get("/current", auth, ctrl.auth.current);
// router.get("/logout", auth, ctrl.auth.logout);
// router.delete("/delete", auth, ctrl.auth.deleteUser);
// module.exports = router;
