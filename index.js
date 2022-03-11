function sumItems(array) {
  let first = array[0];
  if (Array.isArray(first)) first = sumItems(first);
  if (array.length === 0) return 0;
  else if (array.length === 1) return first;
  else return first + sumItems(array.slice(1));
}

module.exports = sumItems;
