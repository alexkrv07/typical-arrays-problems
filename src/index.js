
exports.min = function min (array) {
  if (!array || array.length == 0) {  
      return 0;
    }  
    if (!Array.isArray(array)) {
      array = Array.from(arguments);
    }
      let result = array[0];
      array.forEach(element => {
        if (element < result) {
          result = element;
        }
      });
        return result;
}

exports.max = function max (array) {
  if (!array || array.length == 0) {  
      return 0;
    }  
    if (!Array.isArray(array)) {
      array = Array.from(arguments);
    }
    let result = array[0];
    array.forEach(element => {
      if (element > result) {
        result = element;
      }
    });
    return result;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) {  
    return 0;
  }  
  if (!Array.isArray(array)) {
    array = Array.from(arguments);
  }
  let sum = array.reduce(function(result, value2) {
    return result + value2;
    }, 0);

  return sum / array.length;
}
