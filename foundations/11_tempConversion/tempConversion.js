const convertToCelsius = function(fahrenheit) {
  let c = 5/9 * (fahrenheit-32)
  return Math.round(c * 10) / 10
};

const convertToFahrenheit = function(celcius) {
  let f = (celcius * 1.8) + 32
  return Math.round(f * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
