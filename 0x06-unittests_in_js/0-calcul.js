function calculateNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
      throw new TypeError();
  }
  return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;

console.log(calculateNumber(2, 3))
console.log(calculateNumber(1.2, 3.3));
console.log(calculateNumber(2.5, 3.4));
console.log(calculateNumber(10.2, 11.3));
