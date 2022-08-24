// Filter - returns a new array, can manipulate the size of new array (unlike map), return based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer'},
  { name: 'peter', age: 25, position: 'designer'},
  { name: 'susy', age: 30, position: 'the boss'},
  { name: 'anna', age: 35, position: 'intern'},
];
const fruits = ['apple', 'lemon', 'orange'];


// filter --------------------------------------------
const youngPeople = people.filter((a) => a.age < 30);
console.log(youngPeople); 
// [ { name: 'bob', age: 20, position: 'developer'},{ name: 'peter', age: 25, position: 'designer'} ];
const developers = people.filter((item)=> item.position === 'developer');
console.log(developers);
// [{ name: 'bob', age: 20, position: 'developer'} ]


// no match ------------------------------------------
const senirDevs = people.filter((item) => item.position === 'seniorDev')
console.log(senirDevs);
// []   retorna un objeto vacio.


// find ----------------------------------------------
// find the person peter for axampel:
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
// { name: 'peter', age: 25, position: 'designer'}
// nos retorna un objeto{}
const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit); // lemon
// en este caso nos devuelve un array simple ¿...?


// no match ------------------------------------------

// multiple matches - first match