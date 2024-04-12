const dighomi = [
  "გულნარა",
  "ტატო",
  "ლუკა",
  "გრიგოლ",
  "ლელა",
  "ვლადიმერ",
  "მიქაელ",
  "ავრაამ",
  "ცოტნე",
];

// regular for loop
for (let i = 0; i < dighomi.length; i++) {
  const resident = dighomi[i];
  console.log("checking", resident);
  if (resident !== "ვლადიმერ") {
    continue;
  }
  console.log("found vladimer at", i);
}

// for (const resident of dighomi) {
//   console.log(resident);
// }

const artists = ["Miles Davis Quintet", "Gojira", "Bach", "Alfred Schnittke"];

let listBody = "";
for (const artist of artists) {
  listBody += `<li>${artist}</li>`;
}
document.write(`<ul>${listBody}</ul>`);

// let count = 0;
// let foundArtist = false;
// while (!foundArtist) {
//   const artist = artists[count];
//   if (artist === "Bach") {
//     console.log("Found Bach at", count);
//     foundArtist = true;
//   }
//   count++;
// }

let count = 10;
// while (count < 10) {
//   console.log(count);
//   count++;
// }
do {
  console.log(count);
  count++;
} while (count < 10);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 12; j++) {
    for (let k = 1; k <= 12; k++) {
      console.log("i", i, "j", j, "k", k);
    }
  }
}
