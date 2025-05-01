const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Phones
 *   description: Operations with phones
 */

/**
 * @swagger
 * /phones:
 *   get:
 *     summary: Get the collection of phones
 *     description: Returns a list of all phones
 *     tags: [Phones]
 *     responses:
 *       200:
 *         description: List of phones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Phone'
 *       400:
 *         description: No products found
 */
router.get("/", ctrl.phones.getPhonesCollection);

/**
 * @swagger
 * /phones/{itemName}:
 *   get:
 *     summary: Get a phone by name
 *     description: Returns data for a specific phone by its name or ID
 *     tags: [Phones]
 *     parameters:
 *       - name: itemName
 *         in: path
 *         required: true
 *         description: Name or ID of the phone
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Phone data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Phone'
 *                 productId:
 *                   type: string
 *       400:
 *         description: No products found
 *       404:
 *         description: Phone not found
 */
router.get("/:itemName", ctrl.phones.getPhone);

module.exports = router;
