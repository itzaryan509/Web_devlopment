// console.log(a);
// let a = 10;

// fn();

// function fn() {
//   console.log("Hello, World!");
// }

// "use strict";

// let username = "Aryan";
// console.log(username);

// function myFunction() {
//   "use strict";
//   a = 10;
//   console.log(a);
// }
// myFunction();

// const person1 = {
//   username: "Aryan",
//   email: "singharyan56338@gmail.com",
//   subscription: {
//     netflix: "sold",
//     prime: "active",
//     disney: "inactive",
//   },
//   show: function showDetails() {
//     console.log(this.username);
//     console.log(this.email);
//   },
// };
// person1.address = "India";
// console.log(person1.email);
// console.log(person1.address);
// console.log(person1.subscription.prime);

/*
TASK:
Create an object which has these points:

- customerName, movieName, ticketPrice, and quantity
- A nested customer object with email and city
- A seats array containing at least three seat numbers
- A method calculateTotalAmount()

EXECUTE THESE:
1. Print movieName using dot notation.
2. Read customer's city using nested property access.
3. Change ticket price and add bookingStatus property.
4. Print all object keys using Object.keys().
5. Destructure movieName and quantity.
6. Calculate and print total booking amount.
*/

// Main object
let booking = {
  customerName: "Aryan",
  movieName: "Avengers",
  ticketPrice: 250,
  quantity: 3,

  // Nested customer object
  customer: {
    email: "aryan@gmail.com",
    city: "Mathura",
  },

  // Array containing seat numbers
  seats: ["A1", "A2", "A3"],

  // Method to calculate total booking amount
  calculateTotalAmount: function () {
    return this.ticketPrice * this.quantity;
  },
};

// 1. Print movieName using dot notation
console.log("Movie Name:", booking.movieName);

// 2. Read customer's city using nested property access
console.log("Customer City:", booking.customer.city);

// 3. Change ticket price
booking.ticketPrice = 300;

// Add a new bookingStatus property
booking.bookingStatus = "Confirmed";

console.log("Updated Ticket Price:", booking.ticketPrice);
console.log("Booking Status:", booking.bookingStatus);

// 4. Print all object keys using Object.keys()
console.log("Object Keys:", Object.keys(booking));

// 5. Destructure movieName and quantity
let { movieName, quantity } = booking;

console.log("Destructured Movie Name:", movieName);
console.log("Destructured Quantity:", quantity);

// 6. Calculate and print total booking amount
let totalAmount = booking.calculateTotalAmount();

console.log("Total Booking Amount: ₹" + totalAmount);
