const input = document.querySelector('input[name="anime-search"]');
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const searchKey = input.value;
  if (!searchKey) return;
  // fetch -> Promise (to return response)
  // response -> Promise (to return parsed object)
  fetchAnime(searchKey);
  console.log("HI");
});

async function fetchAnime(searchKey) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchKey}&sfw`,
    );
    console.log(response);
    if (response.status !== 200) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    if (result.data.length === 0) {
      throw new Error("Nothing found!");
    }

    console.log(result);
  } catch (error) {
    console.log("caught", error);
  }
}

// function fetchAnime(searchKey) {
//   fetch(`https://api.jikan.moe/v4/anime?q=${searchKey}&sfw`)
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((err) => console.log("error while fetching", err))
// }

// function searchAnime(searchKey) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.open("GET", `https://api.jikan.moe/v4/animealsdkfjasdlkfj?q=${searchKey}&sfw`);
//     xhr.onload = () => {
//       const result = JSON.parse(xhr.response);
//       resolve(result);
//     };
//     xhr.onerror = () => {
//       reject("Failed fetching anime");
//     };
//     xhr.send();
//   });
// }
