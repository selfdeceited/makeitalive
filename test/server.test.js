var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('server tests', () => {
it('should render index page', done => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        should.exist(res.type);
        res.should.have.status(200);
        res.type.should.equal('text/html');
      done();
    });
})
});