const request = require('request');

var geocodeAddress =(address,result) =>{
    var encodedAddress=encodeURIComponent(address);

    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=wxCy3iBgs1xNthsDtSyFlmOWDN7d0Fyi&location=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
        if(error){
          result('unable to connect to the server');
        }
        else if(response.statusCode==200){

            result(undefined,{
                Address:body.results[0].providedLocation.location,
                Latitute:body.results[0].locations[0].latLng.lat,
                Longtiute:body.results[0].locations[0].latLng.lng
        
             })
        }
    })
}
module.exports={
    geocodeAddress
}