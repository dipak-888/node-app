//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Crawl', () => {
  describe('/GET Crawl', () => {
      it('it should GET crawl page', (done) => {
            chai.request(server)
            .get('/api/crawl?url=https://wiprodigital.com')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Crawl done.');
              done();
            });
      });
  });
  describe('/GET crawl', () => {
      it('it should not GET a crawl without query string url  field', (done) => {
            chai.request(server)
            .get('/api/crawl?url=')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.have.property('message').eql('Query string url is required');
              done();
            });
      });
      });
});