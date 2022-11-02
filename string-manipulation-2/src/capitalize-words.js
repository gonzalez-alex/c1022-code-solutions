/* exported capitalizeWords */

/*
- extract from string, create array from string, separate string by spaces in between words, and assign a variable
- loop through array of words
    - capitalize the first letter of each word and concatenate it with the rest of the word in lowercase
- convert array into string, concatenate each element in the array, and return from the function
*/

function capitalizeWords(string) {
  var split = string.split(' ');
  for (var i = 0; i < split.length; i++) {
    split[i] = (split[i])[0].toUpperCase() + split[i].slice(1).toLowerCase();
  }
  return split.join(' ');
}
