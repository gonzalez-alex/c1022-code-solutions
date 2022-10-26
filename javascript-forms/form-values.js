var $contactForm = document.querySelector('#contact-form');

var newObject = {};

$contactForm.addEventListener('submit', logValues);

function logValues(event) {
  event.preventDefault();
  newObject.name = $contactForm.elements.name.value;
  newObject.email = $contactForm.elements.email.value;
  newObject.message = $contactForm.elements.message.value;
  console.log(newObject);
  $contactForm.reset();
}
