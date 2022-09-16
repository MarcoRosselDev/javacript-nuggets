// Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async () => {
//   return "hello world";
// };

// async function someFunc() {
//   const result = await example();
//   console.log(result);
// }

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

const getData = async () => {
  const user = await getUser("anna");
  if (user) {
    const articles = await getArticles(user.id);
    console.log(articles);
  }
};

getData();

getUser("john")
  .then((user) => getArticles(user.id))
  .then((articles) => console.log(articles))
  .catch((err) => console.log(err));

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name : ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticle = articles.find((user) => user.userId === userId);

    if (userArticle) {
      return resolve(userArticle.articles);
    } else {
      reject("Wrong ID");
    }
  });
}
