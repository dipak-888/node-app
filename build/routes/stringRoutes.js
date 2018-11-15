"use strict";

var express = require('express');
var router = express.Router();
var stringController = require("./../controller/StringController");

router.route("/").get(stringController.getFirstNonRepeatChar);

module.exports = router;
//# sourceMappingURL=stringRoutes.js.map