const convertToCelsius = function(f) {
  let num = (f-32) * 5/9
  return parseFloat(num.toFixed(1))
};

const convertToFahrenheit = function(c) {
  let num = c * 9/5 + 32
  return parseFloat(num.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
