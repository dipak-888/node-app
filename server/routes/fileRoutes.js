var express = require('express');
var router = express.Router();
var fileController = require("./../controller/FileController");


router.route("/")
    .get(fileController.getFileData)
    .post(fileController.storeFileData);
    
module.exports = router;