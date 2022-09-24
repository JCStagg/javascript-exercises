const ftoc = function(fahrTemp) {
  return Math.round(((fahrTemp-32) * (5/9)) * 10) / 10;
};

const ctof = function(celsiusTemp) {
  return Math.round(((celsiusTemp * (9/5)) + 32)*10) / 10;
};

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
