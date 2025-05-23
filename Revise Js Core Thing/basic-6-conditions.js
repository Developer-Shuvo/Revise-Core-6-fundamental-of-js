// Basic 6 Conditions
// 1  >,
// 2  <,
// 3  >=,
// 4  <=,
// 5  !==,
// 6  ===

// 1. Greater Than (>)

let speed = 80;
let speedLimit = 100;

if (speed > speedLimit) {
  console.log("Slow down! You’re over the speed limit.");
} else {
  console.log("Your are safe go on");
}

// 2. Less Than (<)

let waterLevel = 30;
let safeLevel = 50;

if (waterLevel < safeLevel) {
  console.log("Water level is safe.");
}

//  Greater Than or Equal To (>=)

let age = 18;
let votingAge = 18;

if (age >= votingAge) {
  console.log("You’re old enough to vote!");
}

// 4. Less Than or Equal To (<=)

let ticketsSold = 100;
let maxSeats = 100;

if (ticketsSold <= maxSeats) {
  console.log("Tickets are still available!");
}

// 5. Not Strictly Equal (!==)

let userRole = "guest";

if (userRole !== "admin") {
  console.log("Access limited: You are not an admin.");
}

// 6. Strictly Equal (===)

let pinEntered = "1234";
let correctPin = "1234";

if (pinEntered === correctPin) {
  console.log("PIN accepted. Welcome!");
} else {
  console.log("Please enter a valid PIN");
}










// ****************************Self Practice and example here**********************************

// const price = 5000;
// const age = 55;
// const sick = true;

// if (age > 50 || sick === true) {
//   console.log("He will get 20% Discount of all products");
// } else {
//   console.log("Have to pay full taka");
// }

// *******************************************

// const value = 55000;
// // const age = 55; // Removed redeclaration to avoid error
// let discount = 0;

// if (value > 50000 && age > 50) {
//   // He will get 20% discount
//   discount = (value * 20) / 100;
// } else if (value > 20000 && age < 10) {
//   // He will get 10% discount
//   discount = (value * 10) / 100;
// }

// const discountPrice = value - discount;
// const remainAmount = value- discount;
// // console.log('This is the discount amount=',discount);
// // console.log('Payable amount=',remainAmount);
