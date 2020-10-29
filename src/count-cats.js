const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  var result = [].concat(...arr);
  var n=0;
  for (let i=0; i<=result.length;i++){
       if(result[i]=='^^')
        n=n+1;}
     return n;
  };
