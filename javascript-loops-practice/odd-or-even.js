/* exported oddOrEven */
function oddOrEven(number) {
  var newArray = [];
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      newArray.push('even');
    } else if (number[i] % 2 !== 0) {
      newArray.push('odd');
    }
  }
  return newArray;
}
