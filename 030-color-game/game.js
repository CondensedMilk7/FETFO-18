/*
 შექმენით 3 ღილაკი: easy, normal, hard.

 ამ ღილაკების ქვეშ შექმენით 3x3 კვადრატების გრიდი.
 სირთულის მიხედვით:
 - easy ღილაკმა უნდა რენდომ ფერი მიანიჭოს პირველ სტრიქონს (სამ კვადრატს)
 - normal ღილაკმა რენდომ ფერი მიანიჭოს პირველ 6 კვადრატს
 - hard ღილაკმა რენდომ ფერი მიანიჭოს ყველა კვადრატს
 */

const buttons = document.querySelectorAll(".buttons > button");
const colorPrompt = document.querySelector("#color-prompt");
const cells = document.querySelectorAll(".color-grid > button");

let colorToGuess;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const difficulty = button.getAttribute("data-difficulty");
    if (difficulty === "easy") {
      startGame(colorArray(3));
    } else if (difficulty === "normal") {
      startGame(colorArray(6));
    } else if (difficulty === "hard") {
      startGame(colorArray(9));
    }
  });
});

function startGame(colorArray) {
  const availableColors = colorArray.filter((color) => color !== "transparent");
  colorToGuess = availableColors[randomNum(availableColors.length - 1)];
  colorPrompt.textContent = colorToGuess;

  // Colorize grid
  cells.forEach((cell, index) => {
    const cellColor = colorArray[index];
    cell.style.backgroundColor = cellColor;
    cell.setAttribute("onclick", `guess('${cellColor}')`);
    if (cellColor === "transparent") {
      cell.setAttribute("disabled", true);
    } else {
      cell.removeAttribute("disabled");
    }
  });
}

function guess(guessColor) {
  if (guessColor === colorToGuess) {
    Swal.fire({
      title: "ყოჩაღ!",
      // text: 'Do you want to continue',
      icon: "success",
      confirmButtonText: "კარგი",
    });
  } else {
    Swal.fire({
      title: "არასწორია!",
      // text: 'Do you want to continue',
      icon: "error",
      confirmButtonText: "კარგი",
    });
  }

  startGame(colorArray(0));
}

function colorArray(amount) {
  const colorArray = Array(9).fill("transparent");
  for (let i = 0; i < amount; i++) {
    colorArray[i] = randomRGB();
  }
  return colorArray;
}

function randomRGB() {
  return `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
}

function randomNum(n) {
  return Math.ceil(Math.random() * n);
}
