const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity == "string") && (parseFloat(sampleActivity) > 0) && (parseFloat(sampleActivity) < 15)) {
  let nol = Math.ceil((MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  return nol;
  } else {return false}; 
};

