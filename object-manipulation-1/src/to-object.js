/* exported toObject */

/*
- create a new object and assign a variable
- get the second element of keyValuePair parameter
- get the first element of keyValuePair parameter
- add elements to new object by assigning the second element to first element
- return new object
*/

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
