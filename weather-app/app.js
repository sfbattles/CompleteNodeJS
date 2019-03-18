const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const location = process.argv[2];

if (location) {
geocode(location, (error, data) => {
if (error) {
   return console.log('Error:', error);
}
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if (error) {
             return console.log('Error', error);
         }
    console.log(data.location);
    console.log(forecastdata);
  });
});
} else {
    console.log('Please provide an address');
}