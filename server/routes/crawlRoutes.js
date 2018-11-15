var express = require('express');
var router = express.Router();
var crawl = require("./../controller/CrawlController");

router.route("/")
    .get(crawl.getCrawlPage);
    
module.exports = router;