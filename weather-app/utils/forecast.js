const request = require('request');
const chalk = require('chalk');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0560883f05744792fab11e1bc0772d9b/${latitude},${longitude}?lang=en`; 
    request({ url, json: true}, (error, { body } = response) => { 
        if (error) {        
          callback('Unable to connect to weather service',undefined);    
        } else if (body.error) {
          callback("Unable to find location",undefined);
        } else {
          callback(undefined,
            `${body.daily.data[0].summary} It is currently: ${chalk.green.inverse(body.currently.temperature)} with a ${chalk.red.inverse(body.currently.precipProbability) + '%'} rain`);
        }
    }); 
};

module.exports = forecast;