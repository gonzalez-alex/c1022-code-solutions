/* exported invert */

/*
- create storage object
- loop through object from source parameter
    - assign key to value of key from source parameter into storage object
- return storage object from the function
*/

function invert(source) {
  var newObject = {};
  for (var x in source) {
    newObject[source[x]] = x;
  }
  return newObject;
}
