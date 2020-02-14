const request = require('request')

const apple = (sym, callback) =>{
  const url = 'https://finnhub.io/api/v1/quote?symbol='+sym+'&token=bou8eo7rh5r90eafc6p0'

  request({url:url,json:true},(error, {body}) => {
    console.log("coming here "+body.c)
    if (error)
      callback("Unable to connect to stock services",undefined)
    else if (body.error)
      callback('Unable to find stock price', undefined)
    else {
      callback(undefined, body.c)
    }
  })
}

module.exports = apple
