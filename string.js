let string1 = "Hello, World123";

String2 = new String(" I am String 2 ");

String1 = "new String";
console.log(String1);

console.log(String2.trim()); //
console.log(String1.length);

console.log(String1.toUpperCase());
console.log(String1.toLowerCase());
console.log(String1.indexOf("S"));
console.log(String1.charAt(7));
//   Task 1:
// Print the movie name in uppercase.
// Print its length.
// Check whether it includes the search term.
// Extract the first four characters.
// Print a booking message using a template literal.

let movieName = "Hanuman";
console.log(movieName.toUpperCase());
console.log(movieName.length);
console.log(movieName.includes("Han"));
console.log(movieName.substring(0, 4));
console.log(`Booking confirmed for ${movieName}!`);
