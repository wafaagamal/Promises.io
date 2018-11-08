
var bluebird = require('bluebird');
var request = bluebird.promisify(require("request")); 
const yargs=require('yargs')

  
var geocodeAddress =((address) =>{
    
        var encodedAddress=encodeURIComponent(address);

        request({
          url: `http://www.mapquestapi.com/geocoding/v1/address?key=wxCy3iBgs1xNthsDtSyFlmOWDN7d0Fyi&location=${encodedAddress}`,
          json: true
        }).then((res) => {
           console.log("Address : ",res.body.results[0].providedLocation.location);
        }).catch((e)=>{
            console.log('unable to connect the server',e);
        })
           
    
});
// module.exports={
//     geocodeAddress
// }
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


geocodeAddress(argv.address)