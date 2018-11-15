//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../server');
let should = chai.should();


chai.use(chaiHttp);

describe('String', () => {
  describe('/GET non-repeat-char', () => {
      it('it should GET non repeat char', (done) => {
            chai.request(server)
            .get('/api/non-repeat-char?string=amol')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql("First non repeat char is => a");
              done();
            });
      });
  });
});