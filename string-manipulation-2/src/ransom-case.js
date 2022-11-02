/* exported ransomCase */

/*
- convert string into array, separate each letter, and assign a variable
- create storage string
- loop through array of letters
    - if index is even make letter lowercase and add to storage string
    - else make letter uppercase and add to storage string
- return storage string from the function
*/

function ransomCase(string) {
  var split = string.split('');
  var newString = '';
  for (var i = 0; i < split.length; i++) {
    if ([i] % 2 === 0) {
      newString += split[i].toLowerCase();
    } else {
      newString += split[i].toUpperCase();
    }
  }
  return newString;
}
