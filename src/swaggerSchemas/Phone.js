/**
 * @swagger
 * components:
 *   schemas:
 *     Phone:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "apple-iphone-11-128gb-black"
 *         namespaceId:
 *           type: string
 *           example: "apple-iphone-11"
 *         name:
 *           type: string
 *           example: "Apple iPhone 11 128GB Black"
 *         capacityAvailable:
 *           type: array
 *           items:
 *             type: string
 *           example: ["64GB", "128GB", "256GB"]
 *         capacity:
 *           type: string
 *           example: "128GB"
 *         priceRegular:
 *           type: number
 *           example: 1100
 *         priceDiscount:
 *           type: number
 *           example: 1050
 *         colorsAvailable:
 *           type: array
 *           items:
 *             type: string
 *           example: ["black", "green", "yellow", "white", "purple", "red"]
 *         color:
 *           type: string
 *           example: "black"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - "img/phones/apple-iphone-11/black/00.webp"
 *             - "img/phones/apple-iphone-11/black/01.webp"
 *         description:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: array
 *                 items:
 *                   type: string
 *         screen:
 *           type: string
 *           example: "6.1' IPS"
 *         resolution:
 *           type: string
 *           example: "1792x828"
 *         processor:
 *           type: string
 *           example: "Apple A13 Bionic"
 *         ram:
 *           type: string
 *           example: "4GB"
 *         camera:
 *           type: string
 *           example: "12 Mp + 12 Mp + 12MP"
 *         zoom:
 *           type: string
 *           example: "Digital, 5x"
 *         cell:
 *           type: array
 *           items:
 *             type: string
 *           example: ["GPRS", "EDGE", "WCDMA", "UMTS", "HSPA", "LTE"]
 */
