/* exported initial */

/*
- create new array and assign variable
- loop through array parameter
    - push array elements into new array
- return new array
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
