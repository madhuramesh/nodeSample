const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const apple = require('./utils/apple')

const express = require('express')
const hbs = require('hbs')


console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')

const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
  res.render('index',{
    title:'Weather',
    name:'Madhu'
  })
})

app.get('/help/*',(req,res) =>{
  res.render('404',{
    title: '404',
    name: 'Madhu',
    errorMessage: 'Help article not found'
  })
})

app.get('/stock',(req,res) => {
  apple('AAPL',(error, data)=> {
    if (error)
      return res.send({error})
console.log("data "+data)
    res.send({
      Apple: data,
      Microsoft: data
    })

  })
})

app.get('/help',(req,res) => {
  res.render('help',{
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Madhu'
  })
})


app.get('/about', (req,res) => {
  res.render('about',{
    title:'About Me',
    name: 'Madhu'

  })
})

app.get('/weather',(req,res) => {
  if (!req.query.address)
    return res.send({
      error: 'You must provide an Address term'
    })
  //
  geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
    if (error)
      return res.send({error})

    forecast(latitude, longitude, (error, forecastData) => {
      if (error)
        return res.send({error})


      res.send({
        forecast: forecastData,
        location: location
      })


    })
  })
})

app.get('/products',(req,res) =>{

  if (!req.query.search)
    return res.send({
      error:'You must provide a search term'
    })

  console.log(req.query)
  res.send({
    products:[]
  })
})

app.get('*',(req,res) =>{
  res.render('404',{
    title:'404',
    name: 'Madhu',
    errorMessage: 'Page not found.'
  })
})


app.listen(3000,() => {
  console.log('Server is up on port 3000.')
})