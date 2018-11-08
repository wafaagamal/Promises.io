// const Promise = require('bluebird');
const yargs=require('yargs')

var argv=yargs.options({
    address:{
        demand:true,
        describe:' address for fetch  weather',
        alias:'a',
        string:true
    }
  }).help()
  .alias('help','h')
  .argv;
  
  
  var encodedAddress=encodeURIComponent(argv.address);
 
  
// var url = `http://www.mapquestapi.com/geocoding/v1/address?key=wxCy3iBgs1xNthsDtSyFlmOWDN7d0Fyi&location=${encodedAddress}`


// var request = Promise.promisify(require("request"));

// request(url).then(function(result) {
//  console.log(JSON.stringify(result,undefined,2));
 
// }).catch((error)=>{
//  console.log(error)
 
// })









///////////////////////


var bluebird = require('bluebird');
var request = bluebird.promisify(require("request")); 

var options={
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=wxCy3iBgs1xNthsDtSyFlmOWDN7d0Fyi&location=${encodedAddress}`
}


function makeRequest(options) {
    return request(options)
        .then(function(response) {
            console.log(JSON.stringify(response,undefined,2));
            return response.body;
        })
        .catch(function(error) {
            return error;
        })
        .error(function(error) {
            return error;
        })
}
makeRequest(options.url)



























