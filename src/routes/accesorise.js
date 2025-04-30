const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Accessories
 *   description: Operations with accessories
 */

/**
 * @swagger
 * /accessories:
 *   get:
 *     summary: Get the collection of accessories
 *     description: Returns a list of all accessories
 *     tags: [Accessories]
 *     responses:
 *       200:
 *         description: List of accessories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Accessory'
 *       204:
 *         description: No products found
 */
router.get("/", ctrl.acessorise.getAccesCollection);

/**
 * @swagger
 * /accessories/{itemName}:
 *   get:
 *     summary: Get an accessory by name
 *     description: Returns data for a specific accessory by its name or ID
 *     tags: [Accessories]
 *     parameters:
 *       - name: itemName
 *         in: path
 *         required: true
 *         description: Name or ID of the accessory
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Accessory data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Accessory'
 *                 productId:
 *                   type: string
 *       204:
 *         description: No products found
 *       404:
 *         description: Accessory not found
 */
router.get("/:itemName", ctrl.acessorise.getAccess);

module.exports = router;
