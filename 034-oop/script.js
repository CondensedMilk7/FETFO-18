class Track {
  title;
  duration;

  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  play() {
    console.log(`Playing "${this.title} | ${this.duration}"`);
  }
}

const randomTrack = new Track("garage recording #2", "3:40");

console.log(randomTrack);
randomTrack.play();

class Music extends Track {
  artist;
  #genre;

  constructor(genre, artist, title, duration) {
    super(title, duration);
    this.artist = artist;
    this.#genre = genre;
  }

  play() {
    console.log(
      `🎵(${this.#genre}) Playing: ${this.title} by ${this.artist} | ${this.duration}`,
    );
  }

  getGenre() {
    return this.#genre;
  }
}

class Podcast extends Track {
  constructor(host, title, duration) {
    super(title, duration);
    this.host = host;
  }

  play() {
    console.log(
      `🎧 Listening to: ${this.title} hosted by ${this.host} | ${this.duration}`,
    );
  }
}

const music = new Music("Rock", "Radiohead", "Paranoid Android", "4:20");
console.log(music);
music.title = "Pyramid Song";
music.duration = "5:32";
console.log(music.genre);
music.play();

const podcast = new Podcast(
  "Professor John Doe",
  "History of Ancient Rome",
  "02:30:00",
);
podcast.play();

// const piece = new Music("At The Drive-in", "One Arm Scissor");
// const anotherPiece = new Music("Gojira", "Toxic Garbage Island");
// console.log(piece, anotherPiece);
// piece.play();
// anotherPiece.play();
