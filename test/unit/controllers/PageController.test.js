var request = require('supertest');
var agent   = request.agent( 'http://localhost:1337' );

 describe('PageController', function() {
 	it('should show homepage', function (done) {
	    agent.post('/homepage')
	    .expect( '200' )
	    .end(function (err, res) {
	        done();
	    });
	});

   it('should show dashboard', function (done) {
	    agent.post('/dashboard')
	    .expect( '200' )
	    .end(function (err, res) {
	        done();
	    });
	});
  });