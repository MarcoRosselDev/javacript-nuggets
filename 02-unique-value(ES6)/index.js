const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

// map - get all instances
// new Set - narrow down
// ['all', ...] - turn it  back to array

const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories); // ['all', 'breakfast', 'lunch', 'dinner']

const result = document.querySelector(".div");

result.innerHTML = categories
  .map((item) => {
    return `<button>${item}</button>`;
  })
  .join("");
