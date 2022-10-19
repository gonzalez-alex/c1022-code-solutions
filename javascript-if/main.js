/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(ph) {
  if (ph === 7) {
    return 'neutral';
  } else if (ph < 7 && ph >= 0) {
    return 'acid';
  } else if (ph > 7 && ph <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
