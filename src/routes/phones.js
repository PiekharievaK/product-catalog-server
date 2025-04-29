const express = require('express');
const ctrl = require('../controllers');

const router = express.Router();

router.get('/', ctrl.phones.getPhonesCollection);
router.get('/:itemName', ctrl.phones.getPhone);
router.get('/:page', ctrl.phones.getPhonesPerPage);
module.exports = router;

