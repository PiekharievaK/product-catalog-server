/**
 * @swagger
 * components:
 *   schemas:
 *     UserCollectionResponse:
 *       type: object
 *       properties:
 *         favourites:
 *           type: array
 *           items:
 *             type: string
 *           description: List of product IDs in the user's favourites
 *         cart:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Product ID in the user's cart
 *               count:
 *                 type: integer
 *                 description: Quantity of the product in the cart
 * 
 *     FavouritesResponse:
 *       type: object
 *       properties:
 *         collection:
 *           type: array
 *           items:
 *             type: string
 *           description: List of product IDs in the user's favourites
 * 
 *     CartResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *             description: Product ID in the user's cart
 *           count:
 *             type: integer
 *             description: Quantity of the product in the cart
 * 
 *     ActionResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: The message describing the result of the action (e.g., success or error)
 * 
 *     UserInfo:
 *       type: object
 *       required:
 *         - phone
 *         - name
 *         - adress
 *       properties:
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         name:
 *           type: string
 *           description: The full name of the user
 *         adress:
 *           type: object
 *           required:
 *             - city
 *             - street
 *             - building
 *           properties:
 *             city:
 *               type: string
 *               description: The city of the user's address
 *             street:
 *               type: string
 *               description: The street of the user's address
 *             building:
 *               type: string
 *               description: The building of the user's address
 */
