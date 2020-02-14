const request = require('request')

const forecast = (latitude, longitude, callback) =>{
  const url = 'https://api.darksky.net/forecast/7efd9064427bd93c4d37e8ddcd7d4776/'+latitude+','+longitude

  request({url:url,json:true},(error, {body}) => {
    if (error)
      callback("Unable to connect to Weather services",undefined)
    else if (body.error)
      callback('Unable to find location', undefined)
    else {
      callback(undefined, body.daily.data[0].summary)//" + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability +
       // "% chance of rain.")
    }
  })
}

module.exports = forecast