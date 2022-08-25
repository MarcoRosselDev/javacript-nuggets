// Reduce - Objects

// cart example
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel ',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
]

let {totalItems, cartTotal} = cart.reduce((total, cartItem)=> {
  const {amount, price} = cartItem;
  // count items
  total.totalItems += amount;

  // count sum
  total.cartTotal += amount * price;
  return total;
}, {
  totalItems: 0,
  cartTotal: 0
})
console.log(totalItems); // 10
console.log(cartTotal); // 5599.900001

// para reducir las decimas a 2
cartTotal = parseFloat(cartTotal.toFixed(2)); // cuando usamos toFixed -> string | por eso el parseFloat
console.log(typeof(cartTotal)); // 5599.900001 number
console.log(cartTotal); // 5599.9// 5599.900001

// github repos example