"use strict";

var express = require('express');
var router = express.Router();
var productController = require("./../controller/ProductController");

router.route("/").get(productController.getProductDetalis);

module.exports = router;
//# sourceMappingURL=productRoutes.js.map