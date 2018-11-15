'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../server');
var should = chai.should();

chai.use(chaiHttp);

describe('File', function () {
      describe('/GET File', function () {
            it('it should GET file conent', function (done) {
                  chai.request(server).get('/api/file').end(function (err, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('filedata');
                        done();
                  });
            });
      });
});
//# sourceMappingURL=File.Test.js.map