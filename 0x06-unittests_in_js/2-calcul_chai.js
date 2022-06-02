function calculateNumber(type, a, b) {
  if (isNaN(a) || isNaN(b)) {
      throw new TypeError();
  }
    if (type == 'SUM') {
    return Math.round(a) + Math.round(b);	
  } else if (type == 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type == 'DIVIDE') {
    try {
      if (Math.round(b) == 0) throw 'Error';
      return Math.round(a) / Math.round(b);
    }
    catch(err) {
      return (err);
    }
  }
}
module.exports = calculateNumber;

// console.log(calculateNumber('SUM', -3.7, 5));
// console.log(calculateNumber('SUBTRACT', -3.7, 5));
// console.log(calculateNumber('DIVIDE', -3.7, 50));
// console.log(calculateNumber('SUM', 1.4, 4.5));
// console.log(calculateNumber('SUBTRACT', 1.4, 4.5));
// console.log(calculateNumber('DIVIDE', 1.4, 4.5));
// console.log(calculateNumber('DIVIDE', 1.4, 0));
