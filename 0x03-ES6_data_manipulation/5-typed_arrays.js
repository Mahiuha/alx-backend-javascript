export default function createInt8TypedArray(length, position, value) {
  const lenArray = length - 1;
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (position > lenArray) {
    throw Error('Position outside range');
  }
  view[position] = value;
  const dataView = new DataView(buffer);
  return dataView;
}
