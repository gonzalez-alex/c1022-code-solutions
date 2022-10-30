/* exported includes */

/*
- loop through array parameter
    - if current element is equal to value parameter
        - return true from the function
- return false from the function
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
