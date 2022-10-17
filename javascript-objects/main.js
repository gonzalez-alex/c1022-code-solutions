var student = {
  firstName: 'Alex',
  lastName: 'Gonzalez',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Valet';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Audi',
  model: 'R8',
  year: 2008
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Shadow',
  type: 'Golden Retreiver'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
