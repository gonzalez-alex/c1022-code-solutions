/* exported tail */

/*
- create a new array and assign a variable
- loop through the array parameter
    - if index is greater than 0
        - add current array element to new array
- return new array
*/

function tail(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
