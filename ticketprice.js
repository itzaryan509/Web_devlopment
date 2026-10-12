let ticketPrice = 100; // Base ticket price
let discount = 20; // Discount amount
let no_ofTickets = 3; // Number of tickets purchased

let finalPrice = ticketPrice;
let age = 16; // Age of the customer

if (age < 18) {
  console.log("You are eligible for a child discount.");
  finalPrice = finalPrice - discount; // Additional discount for children
  console.log("Final price: $" + finalPrice);
} else if (no_ofTickets > 3) {
  console.log("You are eligible for a group discount.");
  finalPrice = finalPrice - discount * no_ofTickets; // Additional discount for groups
  console.log("Final price: $" + finalPrice);
} else if (age >= 65) {
  console.log("You are eligible for a senior citizen discount.");
  finalPrice = finalPrice - discount; // Additional discount for seniors
  console.log("Final price: $" + finalPrice);
} else if (age >= 18 && age < 65) {
  console.log("No additional discounts available.");
  console.log("Final price: $" + finalPrice);
}
