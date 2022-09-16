const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red");
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    }
  });
}
