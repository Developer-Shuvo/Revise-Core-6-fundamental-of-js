// Using Map.... make a new array from the given array

// *********** Map ************
const products = [
  { Name: "Laptop", Brand: "Hp", Price: 22000, color: "Silver" },
  { Name: "Laptop", Brand: "Dell", Price: 219000, color: "Golden" },
  { Name: "Laptop", Brand: "Asus", Price: 20000, color: "Black" },
  { Name: "Laptop", Brand: "Mi", Price: 33000, color: "Yellow" },
  { Name: "Laptop", Brand: "Samsung", Price: 32000, color: "Silver" },
];

const productColors = products.map((product) => product.color);
const productBrands = products.map((product) => product.Brand);

console.log("Color is : =", productColors); // Output: ["Silver", "Golden", "Black", "Yellow", "Silver"]
console.log("Brand is : =", productBrands);

// *******   Using For Each   *********
products.forEach((product) => console.log(product)); //Same thing but it use forEach
products.forEach((product) => console.log(product.Brand));
products.forEach((product) => console.log(product.color));

// *********Filter **********
const about = [
  { Name: "Aminur", Brand: "Hp", Price: 22000, color: "Silver" },
  { Name: "Khalid", Brand: "Hp", Price: 22000, color: "Silver" },
  { Name: "Niloy", Brand: "Dell", Price: 219000, color: "Golden" },
  { Name: "Jakariya", Brand: "Asus", Price: 20000, color: "Black" },
  { Name: "Yunus", Brand: "Mi", Price: 33000, color: "Yellow" },
  { Name: "Ebrahim", Brand: "Samsung", Price: 32000, color: "Silver" },
];
// Filtering by name
const filterByName = about.filter((product) => product.Name.includes("y"));
console.log("the y is delete", filterByName);

// Filter products with Price less than or equal to 25000
const lessPrice = about.filter((product) => product.Price <= 25000);
console.log("Under 25000 Thousand Taka", lessPrice);








// Bangladesh

const name = "Bangladesh";
const vowel = ["a","e","i","o","u"];

// Remove vowels from the string
const withoutVowel = name.split('').filter(char => !vowel.includes(char.toLowerCase())).join('');
console.log(withoutVowel);
