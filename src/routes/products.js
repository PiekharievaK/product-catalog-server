const express = require('express');
const ctrl = require('../controllers');

const router = express.Router();

router.get('/', ctrl.products.getProductsCollection);
// router.get('/:page', ctrl.products.getProductPerPage);

module.exports = router;
