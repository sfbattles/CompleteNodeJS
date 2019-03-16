const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/0560883f05744792fab11e1bc0772d9b/37.8267,-122.4233?lang=en';
request({ url: url, json: true}, (error, response) => {
    
console.log(response.body.daily.data[0].summary + ` It is currently: ${chalk.green.inverse(response.body.currently.temperature)} with a ${chalk.red.inverse(response.body.currently.precipProbability) + '%'} rain`);

});