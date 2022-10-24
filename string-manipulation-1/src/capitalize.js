/* exported capitalize */

/*
- capitalize the first letter of the word parameter and assign a variable
- make a copy of the word from the 1 index (second letter) and assign a variable
- lowercase the copy of the word and assign a variable
- add the first letter and the lowercase copy of the word together
- return the result of the expression from the function
*/

function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var copyWord = word.slice(1);
  var lowerCaseWord = copyWord.toLowerCase();
  return firstLetter + lowerCaseWord;
}
