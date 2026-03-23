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
}
