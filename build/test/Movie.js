'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var Movie = require('./../model/movie');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Movie', function () {
    beforeEach(function (done) {
        Movie.remove({}, function (err) {
            done();
        });
    });
    describe('/GET movie', function () {
        it('it should GET all the movies', function (done) {
            chai.request(server).get('/api/movie').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });
    describe('/POST movie', function () {
        it('it should not POST a movie without time field', function (done) {
            var movie = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                writer: "J.D.D ",
                year: 1954
            };
            chai.request(server).post('/api/movie').send(movie).end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('time');
                res.body.errors.time.should.have.property('kind').eql('required');
                done();
            });
        });
        it('it should POST a movie ', function (done) {
            var movie = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                writer: "J.R.R. Tolkien",
                year: 1954,
                time: 1170
            };
            chai.request(server).post('/api/movie').send(movie).end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Movie successfully added!');
                res.body.movie.should.have.property('title');
                res.body.movie.should.have.property('author');
                res.body.movie.should.have.property('writer');
                res.body.movie.should.have.property('time');
                res.body.movie.should.have.property('year');
                done();
            });
        });
    });
    describe('/GET/:id movie', function () {
        it('it should GET a movie by the given id', function (done) {
            var nmovie = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                writer: "J.R.R. Tolkien",
                year: 1954,
                time: 1170
            };

            var movie = new Movie(nmovie);
            movie.save(function (err, movie) {
                chai.request(server).get('/api/movie/' + movie.id).send(movie).end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('author');
                    res.body.should.have.property('writer');
                    res.body.should.have.property('time');
                    res.body.should.have.property('year');
                    res.body.should.have.property('_id').eql(movie.id);
                    done();
                });
            });
        });
    });
    describe('/PUT/:id movie', function () {
        it('it should UPDATE a movie given the id', function (done) {
            var nmovie = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                writer: "J.R.R. Tolkien",
                year: 1954,
                time: 1170
            };
            var movie = new Movie(nmovie);
            movie.save(function (err, movie) {
                chai.request(server).put('/api/movie/' + movie.id).send({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, time: 778 }).end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Movie updated!');
                    res.body.movie.should.have.property('year').eql(1950);
                    done();
                });
            });
        });
    });
    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id movie', function () {
        it('it should DELETE a movie given the id', function (done) {
            var nmovie = {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                writer: "J.R.R. Tolkien",
                year: 1954,
                time: 1170
            };

            var movie = new Movie(nmovie);
            movie.save(function (err, movie) {
                chai.request(server).delete('/api/movie/' + movie.id).end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Movie successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=Movie.js.map