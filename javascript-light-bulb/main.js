var clickCount = 0;

var $circle = document.querySelector('.light-on');
var $body = document.querySelector('body');

function lightOnOff(event) {
  clickCount++;
  if (clickCount % 2 === 0) {
    $circle.className = ('light-on');
    $body.classList.remove('body-off');
  } else {
    $circle.className = ('light-off');
    $body.className = ('body-off');
  }
}

$circle.addEventListener('click', lightOnOff);
