export default function hasValuesFromArray(set, arr) {
  for (const elemen of arr) {
    if (!set.has(elemen)) {
      return false;
    }
  }
  return true;
}
