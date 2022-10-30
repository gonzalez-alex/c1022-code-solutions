/* exported truncate */

/*
- extract from string parameter to the index of the length parameter and assign variable
- return variable plus ellipsis from the function
*/

function truncate(length, string) {
  var slice = string.slice(0, length);
  return slice + '...';
}
