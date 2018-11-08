
const yargs=require('yargs')
const geocode=require('./geocode/geocode.js')
const weather = require('./weather/weather');
const {geocodeAddress} = require('./playground/promise');
const axios=require('axios')

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

var url=`http://www.mapquestapi.com/geocoding/v1/address?key=wxCy3iBgs1xNthsDtSyFlmOWDN7d0Fyi&location=${encodedAddress}`;

axios.get(url).then((res)=>{
  if(res.status===400)
  {
    throw Error('unable to get this address')
  }
console.log("Address : ",res.data.results[0].providedLocation.location);
var lat=res.data.results[0].locations[0].latLng.lat
var lng=res.data.results[0].locations[0].latLng.lng

var weatherData=`https://api.forecast.io/forecast/b10690e3ac773eba54d0e11293478dd3/${lat},${lng}`
return axios.get(weatherData)

}).then((res)=>{
  //console.log(res.data);
  console.log("windSpeed : ",res.data.currently.windSpeed);
  console.log("cloudCover : ",res.data.currently.cloudCover);
  console.log("humidity : ",res.data.currently.humidity);
  console.log("apparentTemperature : ",parseInt((5/9) * (res.data.currently.apparentTemperature-32)));
  console.log("temperature : ",parseInt((5/9) * (res.data.currently.temperature-32)));
  console.log("summaryMsg : ",res.data.hourly.summary);
   
}).catch((err)=>{
  console.log('unable to connect the server');
  
})



