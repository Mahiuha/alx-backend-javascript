export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const value of array) {
    res.append(appendString + value);
  }

  return res;
}
