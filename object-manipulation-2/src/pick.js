/* exported pick */

/*
- create storage object
- loop through keys parameter
    - loop through object from source parameter
        - if current element in keys parameter is equal to key in object and if
          value of key from source parameter does not equal to undefined
            - assign value of key from source parameter to key of storage object
- return storage object from the function
*/

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var x in source) {
      if (keys[i] === x && source[x] !== undefined) {
        newObject[x] = source[x];
      }
    }
  }
  return newObject;
}
