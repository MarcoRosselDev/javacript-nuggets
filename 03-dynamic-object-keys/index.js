// dot notation
const person = {
  name: 'john'
};
console.log(person.name);
person.age = 24;
console.log(person); // { name: 'john', age: 24 }

// squere bracket notation

const item = {
  'feature-items': ['item1', 'item2'], 
};
console.log(item["feature-items"]); // ['item1', 'item2']
console.log(person["name"]); // john

let appState = 'loading';
let appState2 = 'started';
let keyName = 'banana';
const app = {
  [appState]: true,
  [appState2]: false
}
console.log(app); // { loading: true, started: false}
// con esto se puede cambiar el nombre clave de un objeto
// bastante util

app[keyName] = 'apple';
console.log(app); /* { loading: true,
started: false, banana: 'apple'}*/ 

const state = {
  loading: true,
  name: '',
  job: ''
}

const updateState = (key, value) => state[key] = value;

updateState('name', 'marco');
updateState('job', 'arquitect & developer');

console.log(state); // {loading: true, name: 'marco', job: 'arquitect & developer'}