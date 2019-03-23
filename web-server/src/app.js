const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')
const port = process.env.PORT || 3000

const app = express();

const rootDir = __dirname;

const publicDirPath = path.join(rootDir, '../public')
const viewsPath = path.join(rootDir, '../templates/views')

const partialsPath = path.join(rootDir, '../templates/partials')

//set static directory to serve
app.use(express.static(publicDirPath))

//set handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Richard Long',
        dog: 'lucky'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Richard Long'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message1: 'Call',
        message2: 'for help',
        name: 'Richard Long',
        support: 'SUPPORT',
        title: "Help"
    })
})

app.get('/weather', (req, res) => {
        if (!req.query.address) {
            return res.send({ //could use return or put in else below
                error: 'You must provide an address to Search'
            })
        }
        location = req.query.address
        geocode(location, (error, {latitude, longitude, location: dataLocation} = {}) => {   //setting up default object
            if (error) {
                return res.send({
                    error: error
                })
        }
        forecast(latitude, longitude , (error, forecastdata) => {
            if (error) {
                return res.send({
                    error: error
                })
            }
            res.send({
                location: dataLocation,
                forecast: forecastdata,
                address: location
            })
        })
    })
})    

app.get('/products', (req, res) => {
    console.log(req.query)
    if (!req.query.search.toLowerCase()) {
        return res.send({ //could use return or put in else below
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Richard Long',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: ''
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})