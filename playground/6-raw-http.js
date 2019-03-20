const https = require('https')
const longitude = 40
const latitude = -75
const url = `https://api.darksky.net/forecast/0560883f05744792fab11e1bc0772d9b/${latitude},${longitude}?lang=en`; 

const request = https.request(url, (response) => {
let data = '';
    response.on('data',(chunk) => {
        data = data + chunk.toString()  
  })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
  })
})
    request.on('error', (error) => {
    console.log('an error', error)
 })
request.end();
