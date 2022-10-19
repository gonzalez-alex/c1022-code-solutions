/* The Math Object */

var a = 22;
var b = 24;
var c = 34;

var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

var heroes = ['Iron man', 'Captain America', 'Thor', 'Batman'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex value:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero value:', randomHero);

/* Array Methods */

var library = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  }
];

var lastBook = library.pop();
console.log('lastBook value:', lastBook);

var firstBook = library.shift();
console.log('firstBook value:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

/* String Methods */

var fullName = 'Alex Gonzalez';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName value:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName value:', sayMyName);
