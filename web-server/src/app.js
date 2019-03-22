const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express();

const rootDir = __dirname;

const publicDirPath = path.join(rootDir,'../public')
const viewsPath = path.join(rootDir,'../templates/views')

const partialsPath = path.join(rootDir,'../templates/partials')

//set static directory to serve
app.use(express.static(publicDirPath))

//set handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Richard Long',
        dog: 'lucky'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'About',
        name: 'Richard Long'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        message1: 'Call',
        message2: 'for help',
        name: 'Richard Long',
        support: 'SUPPORT',
        title: "Help"
    })
})

app.get('/weather',(req, res) => {
    res.send({
        forcast: 'cloudy with sun',
        location: 'quakertown pa'
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title: 'Help', 
        name: 'Richard Long',
    })    
})

app.get('*',(req,res) => {
    res.render('404',{
        title: '' 
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})