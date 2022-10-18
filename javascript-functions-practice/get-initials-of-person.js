/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstNameInitial = person.firstName[0];
  var lastNameInitial = person.lastName[0];
  return firstNameInitial + lastNameInitial;
}
