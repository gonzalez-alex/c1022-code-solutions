/* exported drop */

/*
- create storage array
- loop through array parameter and initialize index to count parameter
    - if array length is equal to 0
        return storage array from the function
    - else add current element to storage array
- return storage array from the function
*/

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (array.length === 0) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
