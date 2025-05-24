// Here is Function
// Variety of function

function name() {
  console.log("This is Shuvo"); //Normal Function Declaration
}

name();

// Function with Parameters (Input)

function information(name) {
  console.log("My name is :=", name);
}

information("Shuvo");
information("Jakia");

//  Function with Return Value

function add(a, b) {
  return a * b;
}

let result = add(5, 5);
console.log("The Multiply result is:=", result);

// 🔹 Real-Life Example: Discount Calculator

function calculateDiscount(price, discountRate) {
  let discount = price * discountRate;
  return price - discount;
}

let finalPrice = calculateDiscount(1000, 20); // 20% discount
console.log("Final Price:", finalPrice); // Output: 800

// 🔹 Arrow Function (Shortcut)

const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(3, 4)); // Output: 12
