const express = require("express");
const ctrl = require("../controllers");
const { auth } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               owner:
 *                 $ref: '#/components/schemas/Owner'
 *               order:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/OrderItem'
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request or validation error
 */
router.post("/", ctrl.order.createOrder);

/**
 * @swagger
 * /orders/user:
 *   post:
 *     summary: Create a new order for authenticated user
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/OrderItem'
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request or validation error
 *       401:
 *         description: Unauthorized, no valid token
 */
router.post("/user", auth, ctrl.order.createOrder);

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Get a specific order by its orderId
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         description: The ID of the order to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Order not found or invalid
 */
router.get("/:orderId", ctrl.order.getOrder);

/**
 * @swagger
 * /orders/contact:
 *   post:
 *     summary: Contact form for orders
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               phone:
 *                 type: string
 *                 example: "+380971112233"
 *               message:
 *                 type: string
 *                 example: "I have an inquiry regarding my order."
 *     responses:
 *       200:
 *         description: Contact request submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 requestId:
 *                   type: string
 *                   example: "CR-ABC1234"
 *                 message:
 *                   type: string
 *                   example: "Your request has been submitted"
 *       400:
 *         description: Bad request or validation error
 */
router.post("/contact", ctrl.order.contactForm);

module.exports = router;
