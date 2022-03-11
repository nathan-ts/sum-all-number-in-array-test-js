function sumItems(array) {
  let first = array[0];
  if (Array.isArray(first)) first = sumItems(first);
  if (array.length === 0) return 0;
  else if (array.length === 1) return first;
  else return first + sumItems(array.slice(1));
}

module.exports = sumItems;

console.log(sumItems([0,[1,2],[3,[4]],5])); // 15
console.log(sumItems([[1, 2, [[3], 4]], 5, []])); // 15
console.log(sumItems([[[[[[[[[[[[[1]]]]]],2]]],3]],4,5]])); // 15


/*
base case:  array length 1, and array[0] not array
            
recursive case: array length 1, and array[0] is array
                array length > 1, 





*/