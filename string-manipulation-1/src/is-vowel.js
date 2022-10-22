/* exported isVowel */

/*
- create an array with all vowels lowercase and uppercase and assign it to a variable
- for each vowel check if char is ever equal
- if equal return true
- if no vowel is equal to char, return false
*/

function isVowel(char) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
