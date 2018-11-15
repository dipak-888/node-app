'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../server');
var should = chai.should();

chai.use(chaiHttp);

describe('String', function () {
      describe('/GET non-repeat-char', function () {
            it('it should GET non repeat char', function (done) {
                  chai.request(server).get('/api/non-repeat-char?string=amol').end(function (err, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql("First non repeat char is => a");
                        done();
                  });
            });
      });
});
//# sourceMappingURL=String.Test.js.map