/* exported numVowels */

/*
- make string lowercase and assign a variable
- create array from lowercase string, separate string by each letter, and assign a variable
- create counter for number of vowels
- loop through array of lowercase string
    - if any letter of array is equal to a vowel
        - increment counter by 1
- return counter for number of vowels from the function
*/
function numVowels(string) {
  var lowerCase = string.toLowerCase();
  var split = lowerCase.split('');
  var numberVowels = 0;
  for (var i = 0; i < split.length; i++) {
    if (split[i] === 'a' || split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u') {
      numberVowels++;
    }
  }
  return numberVowels;
}
