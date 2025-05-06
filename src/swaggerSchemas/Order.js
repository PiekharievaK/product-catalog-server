/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         orderId:
 *           type: string
 *           example: ABC1234
 *         order:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         owner:
 *           $ref: '#/components/schemas/Owner'
 *         price:
 *           type: number
 *           format: float
 *           example: 150.75
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2024-05-06T12:00:00.000Z
 *
 *     OrderItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "prod123"
 *         count:
 *           type: integer
 *           example: 2
 *         price:
 *           type: number
 *           format: float
 *           example: 50.25
 *
 *     Owner:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "user123"
 *         email:
 *           type: string
 *           example: "user@example.com"
 *         name:
 *           type: string
 *           example: "John Doe"
 *         phone:
 *           type: string
 *           example: "+380971112233"
 *         adress:
 *           type: string
 *           example: "Kyiv, Ukraine"
 */
