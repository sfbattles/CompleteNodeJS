const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0560883f05744792fab11e1bc0772d9b/${latitude},${longitude}?lang=en`; 
    request({ url, json: true}, (error, { body } = response) => { 
        if (error) {        
          callback('Unable to connect to weather service',undefined);    
        } else if (body.error) {
          callback("Unable to find location",undefined);
        } else {
          callback(undefined,
            `${body.daily.data[0].summary} It is currently: ${body.currently.temperature} degrees with a ${body.currently.precipProbability}% chance of rain. \rThe high for today will be ${body.daily.data[0].temperatureHigh} degrees ${body.daily.data[0].temperatureLow} for the Low`);
        }
    }); 
};

module.exports = forecast;