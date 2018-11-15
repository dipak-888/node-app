"use strict";

function getProductDetalis(req, res) {
    var name = req.query.name;
    var price = req.query.price;

    if (!name || !price) {
        res.send({ message: "Either name or price param not passed" });
    } else {
        res.send({ productName: name, productPrice: price });
    }
}

module.exports = { getProductDetalis: getProductDetalis };
//# sourceMappingURL=ProductController.js.map