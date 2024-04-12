// const rawJson = `
// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "age": 34,
//   "employed": true,
//   "hobbies": ["fishing", "skiing"]
// }
// `;
//
// const person = JSON.parse(rawJson);
//
// const dimensions = {
//   width: 200,
//   height: 300,
// };
//
// const jsonDimenstions = JSON.stringify(dimensions);
//
// console.log(person.hobbies[1]);
// console.log(jsonDimenstions);

const themeButton = document.querySelector("#theme-switch");
const body = document.querySelector("body");

themeButton.addEventListener("click", () => {
  const savedTheme = localStorage.getItem("theme");
  updateTheme(savedTheme === "dark" ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);
updateTheme(savedTheme);

function updateTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

// https://api.jikan.moe/v4/anime?q=naruto

const input = document.querySelector('input[name="anime-search"]');
const searchButton = document.querySelector("#search-btn");
const results = document.querySelector(".results");

searchButton.addEventListener("click", handleSearch);

function handleSearch() {
  const searchKey = input.value;
  xhr.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.jikan.moe/v4/anime?q=${searchKey}&sfw`);
    const response = JSON.parse(xhr.response);
    displayResults(response.data);
  };
  xhr.send();
}

function displayResults(data) {
  results.innerHTML = "";
  data.forEach((anime) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${anime.title_english}</h3>
      <p>${anime.synopsis}</p>
      <img src="${anime.images.webp.image_url}" />
    `;
    results.appendChild(div);
  });
}
