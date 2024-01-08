const removeFromArray = function(inputArray, ...args) {
  for( let i = 0; i < args.length; i++ ) {
    if( inputArray.includes(args[i]) ) {
      inputArray.splice(inputArray.indexOf(args[i]), 1) ;
    }
  }
  return inputArray ;
};

// Do not edit below this line
module.exports = removeFromArray;
