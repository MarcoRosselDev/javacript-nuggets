// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random === value) {
    resolve("you guessed correctly");
  } else {
    reject("wrong number");
  }
});

console.log(promise);

promise.then((a) => console.log(a));
promise.catch((err) => console.log(err));
