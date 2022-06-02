'use strict';
function calculateNumber(type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
}
module.exports = calculateNumber;
