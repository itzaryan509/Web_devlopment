function verifyPayment(transactionId) {
  if (transactionId === undefined) {
    console.log("Payment Failed !!");
    return;
  } else {
    console.log("TransactionId:", transactionId);
    console.log("Payment is Successful");
    return transactionId;
  }
}

console.log(verifyPayment("TXN12345"));

function addExpense(...expenses) {
  console.log("Expenses:", expenses);
  console.log(
    "Total Expenses:",
    expenses.reduce((total, expense) => total + expense, 0),
  );
  return expenses.reduce((total, expense) => total + expense, 0);
}
console.log(addExpense(100, 200, 300));

// arrow funtion
const multiply = (a, b) => a * b;
console.log(multiply(5, 10));
const divide = (a, b) => a / b;
console.log(divide(10, 2));

const person1 = {
  email: "singharyan56338@gmail.com",
  age: 20,
  name: "Aryan Singh",

  subscription: {
    netflix: "gold",
    hoststar: "basic",
  },

  showDetails: function () {
    console.log("This is user: " + this.name + " age: " + this.age);
  },
};

person1.showDetails();
