import CartManager, {
  getSummary,
  getDetails,
  calculateDiscount,
} from "./cart.js";
import ProductManager from "./product.js";
import PaymentManager from "./payment.js";

const item = new CartManager({
  id: 1,
  name: "Headphones",
  description: "Noise-cancelling wireless headphones",
  price: 150,
  imageUrl: "/images/headphones.png",
});

console.log(item.getSummary());
console.log(item.getDetails());
console.log(getSummary(item));
console.log(getDetails(item));
console.log(calculateDiscount(150, 20));
