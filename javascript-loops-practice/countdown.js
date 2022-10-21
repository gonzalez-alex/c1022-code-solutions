/* exported countdown */
function countdown(number) {
  var arrCountdown = [];
  while (number >= 0) {
    arrCountdown.push(number);
    number--;
  }
  return arrCountdown;
}
