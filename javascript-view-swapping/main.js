var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $viewDiv = document.querySelectorAll('.view');

function clickTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }

  var dataView = event.target.getAttribute('data-view');

  for (var j = 0; j < $viewDiv.length; j++) {
    if ($viewDiv[j].getAttribute('data-view') === dataView) {
      $viewDiv[j].className = 'view';
    } else {
      $viewDiv[j].className = 'view hidden';
    }
  }

}

$tabContainer.addEventListener('click', clickTab);
