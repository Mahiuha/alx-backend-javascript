function calculateNumber(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw TypeError;
  }
  const sum = Math.round(num1) + Math.round(num2);
  return sum;
}

module.exports = calculateNumber;
