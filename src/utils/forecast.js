const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=af81b1bb332fba88a1b212acbbefda0b&query=${latitude},${longitude}&units=f`;
  request({
    url: url,
    json: true
  }, (error, response) => {
    if(error) {
      callback('Unable to connect to weather service', undefined);
    } else if(response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} but it seems like ${response.body.current.feelslike}`);
    }
  })
}

module.exports = forecast;
