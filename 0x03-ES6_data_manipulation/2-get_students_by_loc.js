export default function getStudentsByLocation(arr, city) {
  return arr.filter((el) => el.location === city);
}
