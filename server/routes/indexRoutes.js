var router = require('express').Router();

var crawlRoutes = require("./crawlRoutes");
var stringRoutes = require("./stringRoutes");
var fileRoutes = require("./fileRoutes");
var movieRoutes = require("./movieRoutes");
var productRoutes = require("./productRoutes");

router.use("/crawl", crawlRoutes);
router.use("/non-repeat-char", stringRoutes);
router.use("/file", fileRoutes);
router.use("/movie", movieRoutes);
router.use("/product", productRoutes);

// router.get('/', function(req, res) {
//   res.json({ message: "In /api/ index route" });
// });
    
module.exports = router;