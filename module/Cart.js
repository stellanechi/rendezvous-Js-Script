class CartManager {
  constructor({ id, name, description, price, imageUrl }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  getSummary() {
    return `${this.name}: $${this.price}`;
  }

  getDetails() {
    return `${this.name} - ${this.description} - $${this.price}`;
  }

  applyDiscount(percent) {
    const discount = (this.price * percent) / 100;
    const newPrice = this.price - discount;
    return `${this.name} now costs $${newPrice.toFixed(
      2
    )} after ${percent}% off`;
  }

  static formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
}

function getSummary(item) {
  return `${item.name}: $${item.price}`;
}

function getDetails(item) {
  return `${item.name} - ${item.description} - $${item.price}`;
}

function calculateDiscount(price, percent) {
  const discount = (price * percent) / 100;
  return price - discount;
}

CartManager.getSummary = getSummary;
CartManager.getDetails = getDetails;
CartManager.calculateDiscount = calculateDiscount;

export default CartManager;
