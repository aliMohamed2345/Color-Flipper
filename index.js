const body = document.querySelector(`body`);
const colorResult = document.getElementById(`resulted-color`);
const button = document.querySelector(`main button`);
let header = document.getElementById("header");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let savedColor = localStorage.getItem("color") || "";
let clickCount = true;

// Check if there is a saved color in local storage
if (savedColor) {
  colorResult.innerHTML = savedColor;
  body.style.backgroundColor = savedColor;
}

button.addEventListener(`click`, () => {
  colorResult.innerHTML = ``;
  changeColor(colorResult);
});

function changeColor(color) {
  let newColor = `#`;
  for (let i = 0; i < 6; i++) {
    newColor += hex[Math.floor(Math.random() * hex.length)];
  }
  color.innerHTML = newColor;
  header.style.color = newColor;
  body.style.backgroundColor = newColor;

  // Save the new color to local storage
  localStorage.setItem("color", newColor);
}
