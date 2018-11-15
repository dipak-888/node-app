"use strict";

var express = require('express');
var router = express.Router();
var movie = require("./../controller/MovieController");

router.get("/status", function (req, res) {
    return res.json({ message: "Status from Movie Catalogue!" });
});
router.route("/").get(movie.getMovies).post(movie.postMovie);

router.route("/:id").get(movie.getMovie).delete(movie.deleteMovie).put(movie.updateMovie);

module.exports = router;
//# sourceMappingURL=movieRoutes.js.map