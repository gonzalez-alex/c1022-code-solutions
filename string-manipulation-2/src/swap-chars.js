/* exported swapChars */

/*
- convert string into array, separate each letter, and assign variable
- get the value of the array at parameter firstIndex and assign variable
- get value of array at secondIndex parameter and assign to value of array at firstIndex parameter
- use firstIndex variable and assign to value of array at secondIndex parameter
- create string from array and concatenate all elements with no space in between and assign a variable
- return new string from the function
*/
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var first = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = first;
  var newWord = array.join('');
  return newWord;
}
