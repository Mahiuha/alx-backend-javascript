export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const m = new Map();
  for (const a of arr) m.set(a[0], a[1]);
  return m;
}
