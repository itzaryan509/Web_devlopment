let ticketPrice = 250;
let quantity = 3;
let couponValid = true;

// Step 1: Calculate subtotal
let subtotal = ticketPrice * quantity;

// Step 2: Calculate quantity discount
let quantityDiscount = 0;

if (quantity >= 5) {
  quantityDiscount = subtotal * 0.15; // 15% discount
} else if (quantity >= 3) {
  quantityDiscount = subtotal * 0.1; // 10% discount
} else {
  quantityDiscount = 0; // No discount
}

// Step 3: Subtract quantity discount
let remainingAmount = subtotal - quantityDiscount;

// Step 4: Apply coupon discount
let couponDiscount = 0;

if (couponValid === true) {
  couponDiscount = remainingAmount * 0.05; // 5% discount
}

// Step 5: Calculate final payable amount
let finalAmount = remainingAmount - couponDiscount;

// Round final amount
finalAmount = Math.round(finalAmount);

// Step 6: Print all details
console.log("Subtotal: ₹" + subtotal);
console.log("Quantity Discount: ₹" + quantityDiscount);
console.log("Coupon Discount: ₹" + couponDiscount);
console.log("Final Payable Amount: ₹" + finalAmount);
