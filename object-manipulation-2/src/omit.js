/* exported omit */

/*
- clone source parameter using storage object and source parameter then assign a variable
- loop through keys parameter
    - loop through cloned object
        - if current element in keys parameter is equal to key in object
            - delete property of object
- return storage object from the function
*/

function omit(source, keys) {
  var newObject = Object.assign({}, source);
  for (var i = 0; i < keys.length; i++) {
    for (var x in newObject) {
      if (keys[i] === x) {
        delete newObject[x];
      }
    }
  }
  return newObject;
}
