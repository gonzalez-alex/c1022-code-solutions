/* exported getWords */

/*
- create a storage array
- if string equals empty string, return storage array
- else return string seperated by a space between each word
*/

function getWords(string) {
  var array = [];
  if (string === '') {
    return array;
  } else {
    return string.split(' ');
  }
}
