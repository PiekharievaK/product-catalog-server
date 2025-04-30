const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

router.get("/newest", ctrl.products.getTopNew);
router.get("/sales", ctrl.products.getHotPrice);
router.get("/random", ctrl.products.getRandom);
router.get("/hero", ctrl.products.getHero);
router.get("/", ctrl.products.getProductsCollection);
router.get("/:page", ctrl.products.getProductsPerPage);

module.exports = router;
