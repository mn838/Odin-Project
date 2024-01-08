const sumAll = function(start, end) {
  if( start > end ) {
    let temp = start ;
    start = end ;
    end = temp ;
  }

  if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
    return "ERROR" ;
  }

  let sum = 0 ;
  for( let i = start; i <= end; i++ ) {
    sum += i ;
  }
  return sum ;
};

// Do not edit below this line
module.exports = sumAll;
