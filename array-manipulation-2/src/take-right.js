/* exported takeRight */

/*
- create storage array
- loop through array parameter and initialize index to array length minus the count parameter
    - if array length is equal to 0
        -return storage array from the function
    - else if count parameter is larger than array length
        - return array parameter from the function
    - else
        - add current element into storage array
- return storage array from the function
*/

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array.length === 0) {
      return newArray;
    } else if (count > array.length) {
      return array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
