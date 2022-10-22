/* exported reverse */

/*
- create new array and assign variable
- loop through array parameter
    - start from the last index and stop at 0 index
        - push array elements into new array
- return new array
*/

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
