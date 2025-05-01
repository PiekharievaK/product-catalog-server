const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

/**
 * @swagger
 * /products/newest:
 *   get:
 *     summary: Get newest products
 *     tags: [Products]
 *     description: Returns the newest products sorted by year.
 *     responses:
 *       200:
 *         description: List of newest products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No products"
 */
router.get("/newest", ctrl.products.getTopNew);

/**
 * @swagger
 * /products/sales:
 *   get:
 *     summary: Get products with the hottest prices
 *     tags: [Products]
 *     description: Returns products with the highest price difference between full price and current price.
 *     responses:
 *       200:
 *         description: List of products with the hottest prices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No products"
 */
router.get("/sales", ctrl.products.getHotPrice);

/**
 * @swagger
 * /products/random:
 *   get:
 *     summary: Get random products
 *     tags: [Products]
 *     description: Returns a random selection of products from the database.
 *     responses:
 *       200:
 *         description: List of random products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No products"
 */
router.get("/random", ctrl.products.getRandom);

/**
 * @swagger
 * /products/hero:
 *   get:
 *     summary: Get hero products
 *     tags: [Products]
 *     description: Returns a random selection of products from specific categories (phones, tablets, accessories).
 *     responses:
 *       200:
 *         description: List of hero products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No products"
 */
router.get("/hero", ctrl.products.getHero);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     description: Returns a collection of all available products in the database.
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No products"
 */
router.get("/", ctrl.products.getProductsCollection);

/**
 * @swagger
 * /products/{page}:
 *   get:
 *     summary: Get products per page
 *     tags: [Products]
 *     description: Returns products on a specified page with optional sorting and filtering.
 *     parameters:
 *       - name: page
 *         in: path
 *         required: true
 *         description: Page number to retrieve products
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: sort
 *         in: query
 *         description: Sorting parameter (e.g., "itemId", "year", etc.)
 *         schema:
 *           type: string
 *           example: "year"
 *       - name: perPage
 *         in: query
 *         description: Number of products per page
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: category
 *         in: query
 *         description: Filter products by category
 *         schema:
 *           type: string
 *           example: "phones"
 *     responses:
 *       200:
 *         description: List of products for the specified page
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 collection:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 count:
 *                   type: integer
 *                   description: Total number of products matching the query
 *       400:
 *         description: No products found for the specified page
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No products"
 */
router.get("/:page", ctrl.products.getProductsPerPage);

module.exports = router;
