/* exported take */

/*
- create storage array
- loop through array parameter with condition index less than count parameter
    - if array length is equal to 0
        - return storage array from the function
    - else add current element to storage array
- return storage array from the function
*/

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
