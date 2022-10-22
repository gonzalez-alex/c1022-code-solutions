/* exported isLowerCased */

/*
- create a variable to represent the word in all lowercase
- if all lowercase word strictly equals word parameter, return true
- else return false
*/

function isLowerCased(word) {
  var lower = word.toLowerCase();
  if (lower === word) {
    return true;
  } else {
    return false;
  }
}
