export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  const copy = map;
  for (const [k, v] of map.entries()) if (v === 1) copy.set(k, 100);
  return copy;
}
