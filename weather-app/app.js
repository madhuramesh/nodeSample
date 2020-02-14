const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

console.log(process.argv)

if (!address)
  console.log('Please provide an address')
else {
  geocode(address, (error, {latitude, longitude, location}) => {
    if (error)
      return console.log('Error', error)

    forecast(latitude, longitude, (error, forecastData) => {
      if (error)
        return console.log('Error', error)

      console.log(location)
      console.log('Data', forecastData)
    })
  })
}
    /*const url = 'https://api.darksky.net/forecast/7efd9064427bd93c4d37e8ddcd7d4776/'+data.latitude+','+data.longitude
    request({url: url, json:true}, (error, response) => {
      if (error)
        console.log("Unable to connect to Weather service!!")
      else if (response.body.error)
        console.log('Unable to find location')
      else
        console.log(response.body.daily.data[0].summary+" It is currently "+response.body.currently.temperature+" degrees out. There is a "+response.body.currently.precipProbability+
          "% chance of rain.")
    })*/

/*const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoibWFkaHVyYW0iLCJhIjoiY2s1dDA1bGZ6MDNyczNwcGc4eDlxdnB5aCJ9.LR2qyp4L3tugWPhyhrhlHA'
 let latitude = 0;
 let longitude =0;

request({url: geoUrl, json:true}, (error, response) => {

 if (error)
 console.log("Unable to connect to location services")
 else if(response.body.features.length == 0)
 console.log("Unable to find location. Try another search.")
 else {
 latitude = response.body.features[0].center[1];
 longitude = response.body.features[0].center[0];
 console.log(latitude + ", " + longitude);
 }
 })
 console.log(latitude + ", " + longitude);

 const url = 'https://api.darksky.net/forecast/7efd9064427bd93c4d37e8ddcd7d4776/37.8267,-122.4233'
 //const url = 'https://api.darksky.net/forecast/7efd9064427bd93c4d37e8ddcd7d4776/37.8267,-122.4233?lang=ta'

 request({url: url, json:true}, (error, response) => {
 const data = response.body

 console.log(url)
 if (error)
 console.log("Unable to connect to Weather service!!")
 else if (response.body.error)
 console.log('Unable to find location')
 else
 console.log(data.daily.data[0].summary+" It is currently "+data.currently.temperature+" degrees out. There is a "+data.currently.precipProbability+
 "% chance of rain.")
})*/

/*console.log('Starting')

 setTimeout(() => {
 console.log('2 Second Timer')
 }, 2000)

 setTimeout(() => {
 console.log('0 Second Timer')
 },0)
console.log('Stopping')
 */
