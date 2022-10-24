/*
- create a variable to represent number of times user has clicked
- query the DOM to retrieve element with .hot-button and assign variable
- query the DOM to retrieve element with .click-count and assign variable
- create function that
    - increments the counter variable
    - update text content of element with .click-count to update every time user clicks
    - update element with .hot-button to update the class name depending on number of times clicked
- add a click event listener to the button and add callback function
*/

var clickCount = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCountFunc(event) {
  clickCount++;
  $clickCount.textContent = 'Clicks: ' + clickCount;
  if (clickCount < 4) {
    $hotButton.className = ('hot-button cold');
  } else if (clickCount < 7) {
    $hotButton.className = ('hot-button cool');
  } else if (clickCount < 10) {
    $hotButton.className = ('hot-button tepid');
  } else if (clickCount < 13) {
    $hotButton.className = ('hot-button warm');
  } else if (clickCount < 16) {
    $hotButton.className = ('hot-button hot');
  } else if (clickCount >= 16) {
    $hotButton.className = ('hot-button nuclear');
  }
}

$hotButton.addEventListener('click', clickCountFunc);
