const request = require('request')

const geocode = (address, callback) =>{
  const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWFkaHVyYW0iLCJhIjoiY2s1dDA1bGZ6MDNyczNwcGc4eDlxdnB5aCJ9.LR2qyp4L3tugWPhyhrhlHA&limit=1'
  //https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?types=address&access_token=pk.eyJ1IjoibWFkaHVyYW0iLCJhIjoiY2s1dDA1bGZ6MDNyczNwcGc4eDlxdnB5aCJ9.LR2qyp4L3tugWPhyhrhlHA
  request({url: geoUrl, json:true}, (error, {body}) => {
    //console.log(geoUrl)
    if (error)
      callback("Unable to connect to location services",undefined)
    else if(body.features.length === 0)
      callback("Unable to find location. Try another search.",undefined)
    else{
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name

      })
    }
  })
}

module.exports = geocode