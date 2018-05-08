const expect = require('chai').expect;
const request = require('request');

// testing our application using mocha and chai
it('status', (done)=>{
    request('http://localhost:7000/api', (err, response, body)=>{
        expect(response.statusCode).to.equal(200);
        done()
    });
});

it('no status', (done)=>{
    request('http://localhost:7000/users', (err, response, body)=>{
        expect(response.statusCode).to.equal(404);
        done()
    });
});