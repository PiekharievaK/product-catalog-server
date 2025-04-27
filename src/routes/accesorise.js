const express = require('express');
const ctrl = require('../controllers');

const router = express.Router();

router.get('/', ctrl.acessorise.getAccesCollection);
router.get('/:itemName', ctrl.acessorise.getAccess);

module.exports = router;
