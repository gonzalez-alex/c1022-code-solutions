/* exported tail */

/*
- create a new array and assign a variable
- loop through the array parameter
    - start loop at the second element
        - add current array element to new array
- return new array
*/

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
