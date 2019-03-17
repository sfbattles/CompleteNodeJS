const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/0560883f05744792fab11e1bc0772d9b/37.8267,-122.4233?lang=en';
// request({ url: url, json: true}, (error, response) => { 
//     if (error) {        
//       console.log('Unable to connect to weather service');    
//     } else if (response.body.error) {
//     console.log("unable to find location");
//     }
//     else {
//        console.log(response.body.daily.data[0].summary + ` It is currently: ${chalk.green.inverse(response.body.currently.temperature)} with a ${chalk.red.inverse(response.body.currently.precipProbability) + '%'} rain`);
//     }
// });

//geocoding
const latLongUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/quakertown%20pa.json?access_token=pk.eyJ1Ijoic2ZiYXR0bGVzIiwiYSI6ImNqdGJ0cXB6azBwZGc0Ym8zdm52aTR2c3kifQ.l4qUboA7RBDmTETLdvT0yQ&limit=1'
request({ url: latLongUrl, json: true}, (error, response) => {  
    if (error) {
        console.log('unable to connect to latLongUrl');
    } else if (response.body.message) {
       console.log('unable to get longitude and latitude values');
    } else if (!response.body.hasOwnProperty('features')) {
        console.log('Please check URL.  Did not receive correct response from api')
    } else if (response.body.features.length === 0) {
      console.log("Can not find search location");
    } else {
        console.log(`Longitude is ${chalk.green.inverse(response.body.features[0].center[0])} `);
        console.log(`Latitude is ${chalk.green.inverse(response.body.features[0].center[1])} `);
      }
    });
