/* exported initial */

/*
- create new array and assign variable
- get last index and assign variable
- loop through array parameter
    - if index does not equal last index
        - push array elements into new array
- return new array
*/

function initial(array) {
  var newArray = [];
  var lastIndex = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    if (i !== lastIndex) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
