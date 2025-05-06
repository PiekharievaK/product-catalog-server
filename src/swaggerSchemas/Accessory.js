/**
 * @swagger
 * components:
 *   schemas:
 *     Accessory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "apple-watch-series-3-38mm-space-gray"
 *         namespaceId:
 *           type: string
 *           example: "apple-watch-series-3"
 *         name:
 *           type: string
 *           example: "Apple Watch Series 3 38mm Space Gray"
 *         capacityAvailable:
 *           type: array
 *           items:
 *             type: string
 *           example: ["38mm", "42mm"]
 *         capacity:
 *           type: string
 *           example: "38mm"
 *         priceRegular:
 *           type: number
 *           example: 199
 *         priceDiscount:
 *           type: number
 *           example: 169
 *         colorsAvailable:
 *           type: array
 *           items:
 *             type: string
 *           example: ["space gray", "silver", "gold"]
 *         color:
 *           type: string
 *           example: "space gray"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - "img/accessories/apple-watch-series-3/space-gray/00.webp"
 *             - "img/accessories/apple-watch-series-3/space-gray/01.webp"
 *             - "img/accessories/apple-watch-series-3/space-gray/02.webp"
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
 *           example: "1.3' OLED"
 *         resolution:
 *           type: string
 *           example: "272x340"
 *         processor:
 *           type: string
 *           example: "Apple S3"
 *         ram:
 *           type: string
 *           example: "768MB"
 *         cell:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Wi-Fi", "Bluetooth", "LTE"]
 */
