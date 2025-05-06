const express = require("express");
const ctrl = require("../controllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Firebase-based user authentication
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Sign up or login a user via Firebase token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully signed up or logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Invalid Firebase user data
 */
router.post("/signup", auth, ctrl.auth.signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user with Firebase token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Login error
 */
router.post("/login", auth, ctrl.auth.login);

/**
 * @swagger
 * /auth/current:
 *   get:
 *     summary: Get current authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Unauthorized
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
 *         description: Logout error
 */
router.get("/logout", auth, ctrl.auth.logout);

/**
 * @swagger
 * /auth/delete:
 *   delete:
 *     summary: Delete current authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted
 *       400:
 *         description: Delete error
 */
router.delete("/delete", auth, ctrl.auth.deleteUser);

/**
 * @swagger
 * /auth/google:
 *   post:
 *     summary: Login or sign up with Google via Firebase token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Login successful via Google
 *       400:
 *         description: Google auth error
 */
router.post("/google", auth, ctrl.auth.authWithGoogle);

module.exports = router;
