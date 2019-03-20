const path = require('path')

const express = require('express')

const rootDir = __dirname;
const publicDirPath = path.join(rootDir,'../public')

const app = express()
app.use(express.static(publicDirPath))

app.set('view engine','hbs');

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Richard Long',
        dog: 'lucky'
    })
})

app.get('/scips', (req,res) => {
    res.render('scips',{
        title: 'SCIPS',
        name: 'Dave Potter'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'Weather',
        name: 'Richard Long'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        message1: 'Call',
        message2: 'for help',
        name: 'Richard Long',
        support: 'SUPPORT'
    })
})

app.get('/weather',(req, res) => {
    res.send({
        forcast: 'cloudy with sun',
        location: 'quakertown pa'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})