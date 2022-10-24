/* exported isUpperCased */

/*
- create a variable to represent the word in all uppercase
- if all uppercase word strictly equals word parameter, return true
- else return false
*/

function isUpperCased(word) {
  var upper = word.toUpperCase();
  if (upper === word) {
    return true;
  } else {
    return false;
  }
}
