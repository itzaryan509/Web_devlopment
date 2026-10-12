let category = "Action";

switch (category) {
  case "Action":
    console.log("You selected the Action category.");
    break;
  case "Comedy":
    console.log("You selected the Comedy category.");
    break;

  case "Drama":
    console.log("You selected the Drama category.");
    break;

  default:
    console.log("Invalid category selected.");
    break;
}
let i = 1;
for (i = 2; i <= 10; i++) {
  console.log("This is iteration number: " + i);
}

//FOR OF...
let movies = ["Inception", "The Dark Knight", "Interstellar", "The Matrix"];
for (let movie of movies) {
  console.log("Movie: " + movie);
}
//FOR IN...
let movieDetails = {
  name: "dhurandhar",
  director: "Rajkumar Hirani",
  year: 2000,
};
for (let key in movieDetails) {
  console.log(key + ": " + movieDetails[key]);
}
