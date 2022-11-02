/* exported lastChars */

/*
- extract from string parameter to the index of the length parameter starting
  from the end of the string and assign a variable
- return variable from the function
*/

function lastChars(length, string) {
  var slice = string.slice(-length);
  return slice;
}
