var $phrase = document.querySelectorAll('span');
var $delegation = document.querySelector('body');
var charIndex = 0;

function currentLetter(event) {
  if (event.key !== $phrase[charIndex].innerText) {
    $phrase[charIndex].className = 'incorrect';
  } else if (event.key === $phrase[charIndex].innerText) {
    $phrase[charIndex].className = 'correct';
    $phrase[charIndex + 1].className = 'current';
    charIndex++;
  }
}

$delegation.addEventListener('keydown', currentLetter);
