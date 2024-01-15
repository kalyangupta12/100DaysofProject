const btn = document.getElementById("btn");
let rgb = document.getElementById("rgbCode");
let hex = document.getElementById("hexCode");

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

btn.addEventListener("click", () => {
  const { r, g, b } = generateRandomColor();
  const randomHexColor = rgbToHex(r, g, b);
  const randomRgbColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = randomHexColor;
  rgb.textContent = randomRgbColor;
  hex.textContent = randomHexColor;
});

