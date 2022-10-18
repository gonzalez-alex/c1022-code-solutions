function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('Converted to seconds value:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('Greeting:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('The area is:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('firstName value:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log('Last element of the array is:', getLastElement(['propane', 'and', 'propane', 'accessories']));
