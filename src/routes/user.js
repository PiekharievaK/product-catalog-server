const express = require("express");
const ctrl = require("../controllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * /users/collection:
 *   get:
 *     summary: Get the user's collection (favourites and cart)
 *     tags: [Users]
 *     description: Retrieves the user's favourites and shopping cart information.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's collection retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserCollectionResponse'
 *       404:
 *         description: No products found
 */
router.get("/collection", auth, ctrl.user.getCollection);

/**
 * @swagger
 * /users/favourites:
 *   get:
 *     summary: Get the user's favourites
 *     tags: [Users]
 *     description: Retrieves the list of items in the user's favourites.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's favourites retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FavouritesResponse'
 *       404:
 *         description: No favourites found
 */
router.get("/favourites", auth, ctrl.user.getFavourites);

/**
 * @swagger
 * /users/favourites/{itemId}:
 *   post:
 *     summary: Add an item to the user's favourites
 *     tags: [Users]
 *     description: Adds a product to the user's favourites list. Returns an error if the item is already in the favourites.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to add to favourites
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item added to favourites successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActionResponse'
 *       409:
 *         description: Item already in favourites
 *       400:
 *         description: Unsuccessful adding
 */
router.post("/favourites/:itemId", auth, ctrl.user.addToFavourites);

/**
 * @swagger
 * /users/favourites/{itemId}:
 *   delete:
 *     summary: Remove an item from the user's favourites
 *     tags: [Users]
 *     description: Removes a product from the user's favourites list. Returns an error if the item is not in the favourites.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         description: The ID of the item to remove from favourites
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item removed from favourites successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActionResponse'
 *       409:
 *         description: Item not found in favourites
 *       400:
 *         description: Unsuccessful deleting
 */
router.delete("/favourites/:itemId", auth, ctrl.user.deleteFromFavourites);

/**
 * @swagger
 * /users/card:
 *   get:
 *     summary: Get the user's shopping cart
 *     tags: [Users]
 *     description: Retrieves the user's shopping cart containing items and their quantities.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's cart retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CartResponse'
 *       404:
 *         description: No items found in cart
 */
router.get("/card", auth, ctrl.user.getCard);

/**
 * @swagger
 * /users/card:
 *   post:
 *     summary: Add an item to the user's shopping cart
 *     tags: [Users]
 *     description: Adds a product to the user's shopping cart. If the item is already in the cart, the quantity is updated.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: string
 *               count:
 *                 type: number
 *     responses:
 *       200:
 *         description: Item added to cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActionResponse'
 *       409:
 *         description: Item already in the cart
 *       400:
 *         description: Unsuccessful adding
 */
router.post("/card", auth, ctrl.user.addToCard);

/**
 * @swagger
 * /users/card:
 *   delete:
 *     summary: Remove an item from the user's shopping cart
 *     tags: [Users]
 *     description: Removes a product from the user's shopping cart. Returns an error if the item is not in the cart.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item removed from cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActionResponse'
 *       409:
 *         description: Item not found in cart
 *       400:
 *         description: Unsuccessful deleting
 */
router.delete("/card", auth, ctrl.user.deleteFromCard);

/**
 * @swagger
 * /users/card/clear:
 *   delete:
 *     summary: Clear all items from the user's shopping cart
 *     tags: [Users]
 *     description: Removes all items from the user's shopping cart.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All items removed from cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActionResponse'
 *       400:
 *         description: Unsuccessful clearing
 */
router.delete("/card/clear", auth, ctrl.user.clearCard);

module.exports = router;
