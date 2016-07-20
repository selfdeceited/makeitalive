var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Server tests', () => {
  it('Should render index page', done => {
    const okStatusCode = 200;
    chai.request(server)
      .get('/')
      .end((err, res) => {
          should.not.exist(err);
          should.exist(res);
          res.should.have.status(okStatusCode);
          res.type.should.equal('text/html');
      done();
      });
  })
});