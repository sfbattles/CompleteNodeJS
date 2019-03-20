const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const location = process.argv[2];

if (location) {
geocode(location, (error, {latitude, longitude,location:dataLocation } = data) => {
if (error) {
   return console.log('Error:', error);
}
    forecast(latitude, longitude, (error, forecastdata) => {
        if (error) {
             return console.log('Error', error);
         }
    console.log(dataLocation);
    console.log(forecastdata);
  });
});
} else {
    console.log('Please provide an address');
}