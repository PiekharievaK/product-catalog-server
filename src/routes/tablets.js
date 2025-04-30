const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

router.get("/", ctrl.tablets.getTabletsCollection);
router.get("/:itemName", ctrl.tablets.getTablet);

module.exports = router;
