/* exported reverseWord */

/*
- create a storage string
- for each word, start at the last index and stop at 0 index
    - add each letter to storage string and assign result of expression back to storage string
- return storage string
*/

function reverseWord(word) {
  var wordReversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}
