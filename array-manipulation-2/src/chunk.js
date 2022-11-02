/* exported chunk */

/*
- create a storage array
- if array parameter length is less than or equal to size parameter
  and if array parameter length is not equal to 0
    - add whole array parameter to storage array
- else loop through array parameter and increment index by size parameter added to initial index value
    - get a copy of array parameter starting from index, end at index added to size parameter, and
      add copy of array to storage array
- return storage array from the function
*/

function chunk(array, size) {
  var newArray = [];
  if (array.length <= size && array.length !== 0) {
    newArray.push(array);
  } else {
    for (var i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size));
    }
  }
  return newArray;
}
