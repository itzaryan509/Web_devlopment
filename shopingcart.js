const shoppingCart = {
  customerName: "Rahul",
  items: [
    { name: "Milk", price: 30, quantity: 2 },
    { name: "Bread", price: 40, quantity: 1 },
    { name: "Eggs", price: 90, quantity: 2 },
    { name: "Rice", price: 250, quantity: 1 },
  ],
};

// 1. Calculate cart total using rest parameter
function calculateCartTotal(...prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// 2. Calculate one item's total
function calculateItemTotal(item) {
  return item.price * item.quantity;
}

// 3. Calculate complete bill
function calculateCartBill(cart) {
  let prices = [];

  for (let item of cart.items) {
    prices.push(calculateItemTotal(item));
  }

  let subtotal = calculateCartTotal(...prices);
  let discount = subtotal > 2000 ? subtotal * 0.1 : 0;

  return {
    subtotal: subtotal,
    discount: discount,
    finalAmount: subtotal - discount,
  };
}

// 4. Display checkout summary
function displayCheckoutSummary(cart) {
  let bill = calculateCartBill(cart);

  console.log("Customer:", cart.customerName);

  for (let item of cart.items) {
    console.log(item.name, "x", item.quantity, "₹" + calculateItemTotal(item));
  }

  console.log("Subtotal: ₹" + bill.subtotal);
  console.log("Discount: ₹" + bill.discount);
  console.log("Final Amount: ₹" + bill.finalAmount);
}

// 5. Call the function
displayCheckoutSummary(shoppingCart);
