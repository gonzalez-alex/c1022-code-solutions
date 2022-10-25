var $blueBtn = document.querySelector('.blue-btn');
var $redBtn = document.querySelector('.red-btn');
var $modal = document.querySelector('.fixed');

var modalOpen = false;

function modalOpenClose(event) {
  modalOpen = !modalOpen;
  if (modalOpen) {
    $modal.className = ('fixed text-center');
  } else {
    $modal.className = ('hidden fixed text-center');
  }
}

$blueBtn.addEventListener('click', modalOpenClose);
$redBtn.addEventListener('click', modalOpenClose);
