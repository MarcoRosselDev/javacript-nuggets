// Javascript Nuggets

// Fetch API - Browser API for HTML (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = "https://www.course-api.com/react-tours-project";

console.log(fetch(url));
/*
fetch(url)
  .then((a) => a.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/

// async await metod

const getTours = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getTours();
