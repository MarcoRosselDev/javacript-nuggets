// JavaScript Nuggets

// Fetch Errors
// Only throws an error if cannot resolve.
// Error Response still a response (400 - 500)

const url = "https://www.course-api.com/react-tours-projects";

const getTours = async () => {
  try {
    const resp = await fetch(url);
  } catch (error) {
    console.log(error);
  }
};
