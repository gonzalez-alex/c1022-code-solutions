/* exported getValues */

/*
- create a new array and assign a variable
- loop through the object parameter
    - add the value from the key of the object parameter to the new array
- return new array
*/

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
