var should = require('should');
var request = require('request');
var expect = require('chai').expect;
var baseUrl = "http://localhost:6000";
var util = require('util');


describe ('return birds', function (){

	//this.timeout(15000);

it ('Return bird data', function(done){

   request.get({url: baseUrl +'/getbird'},

  function(error , response , body) {

  	if (!error && response.statusCode == 200){

  		//this.timeout(15000); 
  		setTimeout(done , 15000);

  	expect(response.statusCode).to.equal(200);
  	console.log(body);
  	done();
  }
  }



   	);


});


});