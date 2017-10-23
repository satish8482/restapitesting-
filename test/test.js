var should = require('chai').should();
var request = require('request');
var expect = require('chai').expect;
var baseUrl = "http://localhost:6000";
var util = require('util');
var chai = require('chai');


describe ('Test for get Api method', function (){

	//this.timeout(15000);

it('Return  data', function(done){

   request.get({url: baseUrl +'/getbird'},

  function(error , response , body) {

  	if (!error && response.statusCode == 200){

  		//this.timeout(15000); 
  		//setTimeout(done , 15000);

  	


  	expect(response.statusCode).to.equal(200);
  	console.log(body);
  	done();
  }
  });
});
});


// Testing post method.

describe('Test for post Api method' , function(){




  it.skip('post a data ', function(done){

    let postdata ={

      id :13,
      name:"rahul",
      gender:"ma"
    }

   request.post({url:baseUrl +'/postbird'},
    

     setTimeout(done  ,15000),

    function(error, response ,body){

      if(!error && response.statusCode==200){

          request.post(postdata);
          expect(response.statusCode).to.equal(200);
        console.log(body);
        done();
      }

});
});

});


// Testing Put method 



describe('Test for put api' , function(){

  it.skip('The field should be updated with given id' , function(done){

    this.timeout(15000);
    setTimeout(done , 15000);


    let putdata= {

      id :7 ,
      name: "updatename",
      gender:"m"
    }
     request.put({url:baseUrl +'/putbird'},

      function(error, response , body){

     if (!error && response.statusCode==200){

      
      request.put(putdata);
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
     }
});

})
});


//test for delete method 

describe ('Test for delete Api method', function (){

     it('Return  data', (done)=>{

        let deletedata= { id :22}

   request.delete({url: baseUrl +'/deletebird'},

  function(error , response , body) {

    if (!error && response.statusCode == 200){
      request.delete(deletedata);
     expect(response.statusCode).to.equal(200);
    console.log(body);
    done();
  }
  });
});
});


// testing functions

describe('Math', function() {  
    describe('#abs()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });
    });
});



//testing obj and its properties
describe('object testing' , function(){

  it('should deal with objects' , function(){

   var obj={name :'Jon' , gender:'male'};
   var objB=obj;
   obj.should.equal(objB);
   obj.should.have.property('name').equal('Jon');



  });

  //testing null objects
  it ('should allow testing nulls' , function(){

    var iAmNull=null;
      should.not.exist(iAmNull);

  });
});



