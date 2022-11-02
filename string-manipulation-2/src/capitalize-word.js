/* exported capitalizeWord */

/*
- lowercase the word parameter and assign a variable
- capitalize the first letter of the lowercase word and assign a variable
- extract from the word parameter starting from the second letter and assign a variable
- create a storage string
- if lowercase word is equal to javascript
    - assign the string JavaScript to the storage string
- else concatenate the variable with the first letter capitalized with the rest
  of the word extracted and assign to storage string
- return storage string
*/

function capitalizeWord(word) {
  var wordLower = word.toLowerCase();
  var firstLetter = wordLower[0].toUpperCase();
  var restOfWord = wordLower.slice(1);
  var newWord = '';
  if (wordLower === 'javascript') {
    newWord = 'JavaScript';
  } else {
    newWord = firstLetter + restOfWord;
  }
  return newWord;
}
