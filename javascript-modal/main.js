var $blueBtn = document.querySelector('.blue-btn');
var $redBtn = document.querySelector('.red-btn');
var $modal = document.querySelector('.hidden');

var modalOpen = false;

function modalOpenClose(event) {
  modalOpen = !modalOpen;
  if (modalOpen) {
    $modal.className = ('modal');
  } else {
    $modal.className = ('hidden');
  }
}

$blueBtn.addEventListener('click', modalOpenClose);
$redBtn.addEventListener('click', modalOpenClose);
