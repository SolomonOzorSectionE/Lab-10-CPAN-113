// PART 1: SETTING UP CLASSES
class Product {
  // Constructor to initialize properties
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to calculate total value of the product in stock
  getTotalValue() {
    return this.price * this.quantity;
  }

  // Method to return a string representation of the product
  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }

     // Part 3: Static method to apply discount to all products
  static applyDiscount(products, discount) {
    for (let product of products) {
      product.price = product.price - (product.price * discount);
    }
  }
  
}

// Testing the Product class
const product1 = new Product("Apple", 2.5, 50);

console.log(product1.toString());
console.log("Total Value:", product1.getTotalValue());



// PART 2: ADDING INHERITANCE
// PerishableProduct Class that inherits all properties from Product
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);

    // New property
    this.expirationDate = expirationDate;
  }

  // Override toString method to include expiration date
  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

// Testing the PerishableProduct class
const milk = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");
const bread = new PerishableProduct("Bread", 3.0, 15, "2024-12-30");

console.log(milk.toString());
console.log(bread.toString());


// PART 3: STATIC METHODS AND PROPERTIES
// Testing the static discount method
const allProducts = [product1, milk, bread];

console.log("Before discount:");
for (let product of allProducts) {
  console.log(product.toString());
}

Product.applyDiscount(allProducts, 0.1);

console.log("Discount applied:");
for (let product of allProducts) {
  console.log(product.toString());
}
