const reverseString = function(inputString) {
  result = "" ;
  for( let i = 0; i < inputString.length; i++ ) {
    result += inputString[inputString.length - i - 1] ;
  }

  return result ;
};

// Do not edit below this line
module.exports = reverseString;
