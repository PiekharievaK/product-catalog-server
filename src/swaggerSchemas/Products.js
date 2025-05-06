/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: Unique internal product ID
 *         category:
 *           type: string
 *           example: "phones"
 *           description: Product category (phones, tablets, accessories, etc.)
 *         itemId:
 *           type: string
 *           example: "apple-iphone-7-32gb-black"
 *           description: Unique item identifier
 *         name:
 *           type: string
 *           example: "Apple iPhone 7 32GB Black"
 *           description: Product name
 *         fullPrice:
 *           type: number
 *           example: 400
 *           description: Original full price of the product
 *         price:
 *           type: number
 *           example: 375
 *           description: Current price after discount
 *         screen:
 *           type: string
 *           example: "4.7' IPS"
 *           description: Screen details
 *         capacity:
 *           type: string
 *           example: "32GB"
 *           description: Storage capacity of the product
 *         color:
 *           type: string
 *           example: "black"
 *           description: Product color
 *         ram:
 *           type: string
 *           example: "2GB"
 *           description: RAM size
 *         year:
 *           type: integer
 *           example: 2016
 *           description: Year the product was released
 *         image:
 *           type: string
 *           example: "img/phones/apple-iphone-7/black/00.webp"
 *           description: Main image path or URL for the product
 *
 *     ProductDetailsResponse:
 *       type: object
 *       properties:
 *         product:
 *           $ref: '#/components/schemas/Product'
 */
