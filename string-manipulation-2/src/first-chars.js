/* exported firstChars */

/*
- extract from string parameter
- start from first letter, go to the index of the length parameter, and assign a variable
- return variable from the function
*/

function firstChars(length, string) {
  var slice = string.slice(0, length);
  return slice;
}
