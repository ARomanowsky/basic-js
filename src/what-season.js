const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if ( Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error('THROWN');
  }

  let month = date.getMonth();
  return (month == 11 || month <= 1) ? 'winter':
         (month <= 4 ? 'spring':
         (month <= 7 ? 'summer':
         (month <= 10 ? '/autumn|fall/' : 'Unable to determine the time of year!')));
        }
