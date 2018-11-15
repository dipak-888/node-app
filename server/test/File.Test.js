//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../server');
let should = chai.should();


chai.use(chaiHttp);

describe('File', () => {
  describe('/GET File', () => {
      it('it should GET file conent', (done) => {
            chai.request(server)
            .get('/api/file')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('filedata');
              done();
            });
      });
  });
});