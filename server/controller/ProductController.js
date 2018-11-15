function getProductDetalis(req, res) {
    let name = req.query.name;
    let price = req.query.price;

    if(!name || !price) {
        res.send({message: "Either name or price param not passed"});
    } else {
        res.send({productName: name , productPrice: price});
    }    
}

module.exports = {getProductDetalis};