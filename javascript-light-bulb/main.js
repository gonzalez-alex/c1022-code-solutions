var isLightOn = true;

var $circle = document.querySelector('.light-on');
var $body = document.querySelector('body');

function lightOnOff(event) {
  isLightOn = !isLightOn;
  if (isLightOn) {
    $circle.className = ('light-on');
    $body.classList.remove('body-off');
  } else {
    $circle.className = ('light-off');
    $body.className = ('body-off');
  }
}

$circle.addEventListener('click', lightOnOff);
