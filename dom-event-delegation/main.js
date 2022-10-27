var $taskList = document.querySelector('.task-list');

function logConsole(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
}

$taskList.addEventListener('click', logConsole);
$taskList.addEventListener('click', function (e) {
  if (e.target && e.target.nodeName === 'BUTTON') {
    var ancestor = e.target.closest('.task-list-item');
    console.log('closest .task-item-list', ancestor);
    ancestor.remove();
  }
});
