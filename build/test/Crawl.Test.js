'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Crawl', function () {
      describe('/GET Crawl', function () {
            it('it should GET crawl page', function (done) {
                  chai.request(server).get('/api/crawl?url=https://wiprodigital.com').end(function (err, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Crawl done.');
                        done();
                  });
            });
      });
      describe('/GET crawl', function () {
            it('it should not GET a crawl without query string url  field', function (done) {
                  chai.request(server).get('/api/crawl?url=').end(function (err, res) {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('Query string url is required');
                        done();
                  });
            });
      });
});
//# sourceMappingURL=Crawl.Test.js.map