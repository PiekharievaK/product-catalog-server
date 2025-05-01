const express = require("express");
const ctrl = require("../controllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Operations related to orders
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order (unauthenticated)
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - owner
 *               - order
 *             properties:
 *               owner:
 *                 type: object
 *                 required:
 *                   - name
 *                   - phone
 *                   - email
 *                 properties:
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   email:
 *                     type: string
 *               order:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - id
 *                     - count
 *                   properties:
 *                     id:
 *                       type: string
 *                     count:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Order successfully created
 *       400:
 *         description: No products or validation error
 */
router.post("/", ctrl.order.createOrder);

/**
 * @swagger
 * /order/user:
 *   post:
 *     summary: Create a new order (authenticated)
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - order
 *             properties:
 *               order:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - id
 *                     - count
 *                   properties:
 *                     id:
 *                       type: string
 *                     count:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Order successfully created
 *       400:
 *         description: No products or validation error
 */
router.post("/user", auth, ctrl.order.createOrder);

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the order
 *     responses:
 *       200:
 *         description: Order found
 *       204:
 *         description: No products found
 */
router.get("/:orderId", ctrl.order.getOrder);

module.exports = router;
