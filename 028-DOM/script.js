const heading = document.querySelector("h1");
heading.textContent = "I have changed";
heading.classList.add("someclass");
heading.classList.add("another-class");
console.log(heading.classList.contains("someclass"));

// const p = document.querySelector('p:nth-child(2)');
// p.textContent = 'Changed!';

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
  p.innerHTML = `<i>Changed </i> <b>paragraph</b> ${index + 1}`;
});

const counterButton = document.getElementById("counter");

let count = 0;
counterButton.addEventListener("click", (event) => {
  console.log(event);
  count++;
  counterButton.textContent = `Count: ${count}`;
});

/*
  ავაწყოთ Tic Tac toe;
  
  გამოსახეთ 3x3 გრიდი, სადაც თითოეულ უჯრაზე შეიძლება დაწკაპება
  და X-ის ან O-ს ჩასმა.

  - თუ ჯერ ჩავსვით X, შემდეგმა დაწყკაპებამ უნდა ჩასვას O.
  - გამარჯვების ლოგიკა არ გვაინტერესებს.
  - თუ უჯრაში უკვე არის ჩასმული სიმბოლო, იქ არაფერი არ უნდა ჩავსვათ.
*/

const cells = document.querySelectorAll(".grid > div");
let isX = true;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent) {
      cell.textContent = isX ? "X" : "O";
      cell.setAttribute("data-value", isX);
      isX = !isX;
    }
  });
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
  });
});

function randomNum(n) {
  return Math.round(Math.random() * n);
}

const resultContainer = document.querySelector('.result-container');

document.querySelector("#element-creator").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Hello there!";
  p.classList.add("generated-p");
  resultContainer.appendChild(p);
});
