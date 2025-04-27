const express = require('express');
const ctrl = require('../controllers');

const router = express.Router();

router.get('/', ctrl.phones.getPhonesCollection);
router.get('/:itemName', ctrl.phones.getPhone);

module.exports = router;
