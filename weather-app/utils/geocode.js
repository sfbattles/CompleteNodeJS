const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2ZiYXR0bGVzIiwiYSI6ImNqdGJ0cXB6azBwZGc0Ym8zdm52aTR2c3kifQ.l4qUboA7RBDmTETLdvT0yQ&limit=1`;
    request({url : url, json: true}, (error, response) => {  //function to run when completed
      if (error) {
         callback('unable to connect to location services',undefined); 
      } else if (response.body.message) {
        callback('unable to get longitude and latitude values',undefined);
      } else if (!response.body.hasOwnProperty('features')) {
        callback('Please check URL.  Did not receive correct response from api', undefined);
      } else if (response.body.features.length === 0) {
        callback('Unable to find Location try another search');  
      } else {
        callback(undefined, {
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name
        });  
      }  
    });
};

module.exports = geocode;