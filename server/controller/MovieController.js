let mongoose = require('mongoose');
let Movie = require('./../model/movie');

/*
 * GET /movie route to retrieve all the movies.
 */
function getMovies(req, res) {
    //Query the DB and if no errors, send all the movies
    let query = Movie.find({});
    query.exec((err, movies) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.status(200).json(movies);
    });
}

/*
 * POST /movie to save a new movie.
 */
function postMovie(req, res) {
    //Creates a new movie
    var newMovie = new Movie(req.body);
   
    //Save it into the DB.
    newMovie.save((err,movie) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.status(200).json({message: "Movie successfully added!", movie });
        }
    });
}

/*
 * GET /movie/:id route to retrieve a movie given its id.
 */
function getMovie(req, res) {
    Movie.findById(req.params.id, (err, movie) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.status(200).json(movie);
    });        
}

/*
 * DELETE /movie/:id to delete a movie given its id.
 */
function deleteMovie(req, res) {
    Movie.remove({_id : req.params.id}, (err, result) => {
        res.status(200).json({ message: "Movie successfully deleted!", result });
    });
}

/*
 * PUT /movie/:id to update a movie given its id
 */
function updateMovie(req, res) {
    Movie.findById({_id: req.params.id}, (err, movie) => {
        if(err) res.send(err);
        Object.assign(movie, req.body).save((err, movie) => {
            if(err) res.send(err);
            res.status(200).json({ message: 'Movie updated!', movie });
        });    
    });
}

//export all the functions
module.exports = { getMovies, postMovie, getMovie, deleteMovie, updateMovie };