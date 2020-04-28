// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app';
// var assert = require('assert')

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

chai.use(chaiHttp);
chai.should();

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

describe("Puddings", function () {
    describe("GET /", function () {
        it("should get all puddings record", function (done) {
            chai.request(app)
                .get('/puddings/all/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[1].should.be.equal(puddingFlavors[1]);
                    done();
                });
        });
    });
})


// var assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
//     // console.log()
// });