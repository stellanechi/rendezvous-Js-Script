class Product {
  constructor({ id, title, price, category, description, image }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
  }
}

class ProductService {
  baseUrl = "https://fakestoreapi.com/products";

  async getProductById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();
    return new Product(data);
  }
}

const productService = new ProductService();

async function renderProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("productId");

  if (!productId) {
    document.body.innerHTML =
      "<p class='text-center mt-10 text-red-600'>No product ID found!</p>";
    return;
  }

  const product = await productService.getProductById(productId);

  // Display the product
  //   const container = document.getElementById("product-details");
  //   container.innerHTML = `
  //     <div class="max-w-4xl mx-auto overflow-hidden mt-10">
  //       <div class="grid grid-cols-1 md:grid-cols-2">
  //         <div class="flex items-center justify-center  p-6">
  //           <img src="${product.image}" alt="${product.title}" class="max-h-80 object-contain">
  //         </div>
  //       </div>
  //     </div>
  //   `;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.title;
  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-price").textContent = `$${product.price}`;
  document.getElementById("product-description").textContent =
    product.description;
}

renderProductDetails();
