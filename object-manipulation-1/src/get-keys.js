/* exported getKeys */

/*
- create a new array and assign a variable
- loop through the object parameter
    - add the key from the object into the new array
- return the new aray
*/

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
