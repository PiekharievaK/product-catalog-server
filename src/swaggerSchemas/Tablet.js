/**
 * @swagger
 * components:
 *   schemas:
 *     Tablet:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "apple-ipad-pro-11-2021-128gb-spacegray"
 *         namespaceId:
 *           type: string
 *           example: "apple-ipad-pro-11-2021"
 *         name:
 *           type: string
 *           example: "Apple iPad Pro 11 (2021) 128GB Space Gray"
 *         capacityAvailable:
 *           type: array
 *           items:
 *             type: string
 *           example: ["128GB", "256GB", "512GB", "1TB", "2TB"]
 *         capacity:
 *           type: string
 *           example: "128GB"
 *         priceRegular:
 *           type: number
 *           example: 799
 *         priceDiscount:
 *           type: number
 *           example: 749
 *         colorsAvailable:
 *           type: array
 *           items:
 *             type: string
 *           example: ["spacegray", "silver"]
 *         color:
 *           type: string
 *           example: "spacegray"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - "img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp"
 *             - "img/tablets/apple-ipad-pro-11-2021/spacegray/01.webp"
 *             - "img/tablets/apple-ipad-pro-11-2021/spacegray/02.webp"
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
 *           example: "11' Liquid Retina"
 *         resolution:
 *           type: string
 *           example: "2388x1668"
 *         processor:
 *           type: string
 *           example: "Apple M1"
 *         ram:
 *           type: string
 *           example: "8GB"
 *         camera:
 *           type: string
 *           example: "12MP + 12MP"
 *         zoom:
 *           type: string
 *           example: "Digital zoom up to 5x"
 *         cell:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Not applicable"]
 */
