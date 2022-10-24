/* exported compact */

/*
- create new array and assign variable
- loop through array parameter
    - if array current element returns true
        - push current element into new array
- return new array
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
