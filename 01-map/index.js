// MAP Method

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer'
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer'
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss'
  }
];

// Quokka.js - Extension
// return a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const ages = people.map(() => {});
console.log(ages); // [ undefined, undefined, undefined ]