const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tablets
 *   description: Operations with tablets
 */

/**
 * @swagger
 * /tablets:
 *   get:
 *     summary: Get the collection of tablets
 *     description: Returns a list of all tablets
 *     tags: [Tablets]
 *     responses:
 *       200:
 *         description: List of tablets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tablet'
 *       400:
 *         description: No products found
 */
router.get("/", ctrl.tablets.getTabletsCollection);

/**
 * @swagger
 * /tablets/{itemName}:
 *   get:
 *     summary: Get a tablet by name
 *     description: Returns data for a specific tablet by its name or ID
 *     tags: [Tablets]
 *     parameters:
 *       - name: itemName
 *         in: path
 *         required: true
 *         description: Name or ID of the tablet
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tablet data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Tablet'
 *                 productId:
 *                   type: string
 *       400:
 *         description: No products found
 *       404:
 *         description: Tablet not found
 */
router.get("/:itemName", ctrl.tablets.getTablet);

module.exports = router;
