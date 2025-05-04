const express = require("express");
const ctrl = require("../controllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to user favourites and cart
 */

/**
 * @swagger
 * /user/collection:
 *   get:
 *     summary: Get user's favourites and cart
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns favourites and cart
 *       404:
 *         description: No products
 */
router.get("/collection", auth, ctrl.user.getCollection);

/**
 * @swagger
 * /user/favourites:
 *   get:
 *     summary: Get user's favourites
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of favourite items
 *       404:
 *         description: No products
 */
router.get("/favourites", auth, ctrl.user.getFavourites);

/**
 * @swagger
 * /user/favourites/{itemId}:
 *   post:
 *     summary: Add item to favourites
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the item to add
 *     responses:
 *       200:
 *         description: Successfully added
 *       409:
 *         description: Already in favourites
 *       400:
 *         description: Unsuccessful adding
 *   delete:
 *     summary: Remove item from favourites
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the item to remove
 *     responses:
 *       200:
 *         description: Successfully removed
 *       409:
 *         description: Not in favourites
 *       400:
 *         description: Unsuccessful deletion
 */
router.post("/favourites/:itemId", auth, ctrl.user.addToFavourites);
router.delete("/favourites/:itemId", auth, ctrl.user.deleteFromFavourites);

/**
 * @swagger
 * /user/card:
 *   get:
 *     summary: Get items in cart
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart contents
 *       400:
 *         description: No products
 *   post:
 *     summary: Add or update item in cart
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *               - count
 *             properties:
 *               itemId:
 *                 type: string
 *               count:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item added or count updated
 *       409:
 *         description: Already in cart
 *       400:
 *         description: Unsuccessful adding
 *   delete:
 *     summary: Remove item from cart
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - itemId
 *             properties:
 *               itemId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully removed
 *       409:
 *         description: Not in cart
 *       400:
 *         description: Unsuccessful deletion
 */
router.get("/card", auth, ctrl.user.getCard);
router.post("/card", auth, ctrl.user.addToCard);
router.delete("/card", auth, ctrl.user.deleteFromCard);
router.delete("/card/clear", auth, ctrl.user.clearCard);

module.exports = router;
