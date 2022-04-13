export default function getStudentIdsSum(arr) {
  return arr.reduce((a, b) => a + b.id, 0);
}
