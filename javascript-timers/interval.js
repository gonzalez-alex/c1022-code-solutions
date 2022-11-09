var intervalID = setInterval(timer, 1000);
var $countdown = document.querySelector('.countdown-display');
var count = 4;

function timer() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
