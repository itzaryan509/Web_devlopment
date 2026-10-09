let a = 10;
let b = 5;

// 1. ARITHMETIC OPERATORS
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0 (remainder)
console.log("Exponent:", a ** 2); // 100 (10 power 2)

// 2. ASSIGNMENT OPERATORS
let x = 10; // Assign value 10
x += 5;
console.log("Plus assign:", x); // 15

x -= 3;
console.log("Minus assign:", x); // 12

x *= 2;
console.log("Multiply assign:", x); // 24

x /= 4;
console.log("Divide assign:", x); // 6

x %= 4;
console.log("Modulus assign:", x); // 2

// 3. COMPARISON OPERATORS
console.log("Equal:", a == b); // false
console.log("Strict equal:", 5 === "5"); // false
console.log("Not equal:", a != b); // true
console.log("Strict not equal:", 5 !== "5"); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false
console.log("Greater/equal:", a >= 10); // true
console.log("Less/equal:", b <= 5); // true

// 4. LOGICAL OPERATORS
console.log("AND:", a > 5 && b < 10); // true (both true)
console.log("OR:", a < 5 || b == 5); // true (one true)
console.log("NOT:", !(a > b)); // false (opposite)

// 5. INCREMENT AND DECREMENT
let n = 5;
n++;
console.log("Increment:", n); // 6

n--;
console.log("Decrement:", n); // 5

// 6. STRING OPERATOR
let firstName = "Raj";
let lastName = "Kumar";
console.log("Full name:", firstName + " " + lastName);
// Output: Raj Kumar

// 7. TERNARY OPERATOR
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log("Age result:", result); // Adult

// 8. TYPEOF OPERATOR
console.log("Type of a:", typeof a); // number
console.log("Type of name:", typeof firstName); // string

// 9. IF-ELSE WITH ARITHMETIC AND COMPARISON
let marks = 75;

if (marks >= 40) {
  console.log("Pass"); // Runs if condition is true
} else {
  console.log("Fail"); // Runs if condition is false
}

// 10. IF-ELSE IF-ELSE
let number = 0;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 11. CHECK EVEN OR ODD USING MODULUS
let num = 7;

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd"); // Output: Odd
}
