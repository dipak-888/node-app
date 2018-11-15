var express = require('express');
var router = express.Router();
var productController = require("./../controller/ProductController");

router.route("/")
    .get(productController.getProductDetalis);
    
module.exports = router;