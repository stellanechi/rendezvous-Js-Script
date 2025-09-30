// const eventData = [
//   {
//     id: 1,
//     title: "ISWIS Live show",
//     date: "Sun, Oct 3rd • 6pm",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//     image: "../rendeezvous-js/image/card-one-image.png",
//     detailsUrl: "DetailsPage.html",
//   },
//   {
//     id: 2,
//     title: "Music Festival 2024",
//     date: "Sat, Oct 16th • 8pm",
//     description:
//       "Experience the best live music performances from top artists around the world. Join us for an unforgettable night of entertainment.",
//     image: "../rendeezvous-js/image/card-two.png",
//     detailsUrl: "DetailsPage.html",
//   },
//   {
//     id: 3,
//     title: "Art Exhibition Opening",
//     date: "Fri, Oct 22nd • 7pm",
//     description:
//       "Discover contemporary art from emerging and established artists. Wine and refreshments will be served during the opening reception.",
//     image: "../rendeezvous-js/image/card-three.png",
//     detailsUrl: "DetailsPage.html",
//   },
// ];

// const createEventContainer = (event) => {
//   const eventContainer = document.createElement("div");
//   eventContainer.id = "event-container";
//   eventContainer.className = "flex flex-row overflow-x-auto pl-10 pr-10";

//   const targetElement = document.getElementById("event-container");
//   targetElement.appendChild(eventContainer);

//   // Create the section element
//   const section = document.createElement("section");
//   section.className = "pl-8 pt-16";

//   // Create the main card div
//   const cardDiv = document.createElement("div");
//   cardDiv.className = "max-w-sm bg-white rounded-xl shadow-md overflow-hidden";

//   // Create the image container div
//   const imageContainer = document.createElement("div");
//   imageContainer.className =
//     "relative bg-orange-500 h-48 flex items-center justify-center";

//   // Create the inner div for image
//   const innerImageDiv = document.createElement("div");
//   innerImageDiv.className = "";

//   // Create the image element
//   const img = document.createElement("img");
//   img.src = event.image;
//   img.alt = "person 1";
//   img.className = "";

//   // Create the content div
//   const contentDiv = document.createElement("div");
//   contentDiv.className = "p-5";

//   // Create the title
//   const title = document.createElement("h2");
//   title.className = "text-lg font-semibold";
//   title.textContent = event.title;

//   // Create the date paragraph
//   const datePara = document.createElement("p");
//   datePara.className = "text-sm text-gray-600";
//   datePara.textContent = event.date;

//   // Create the description paragraph
//   const descPara = document.createElement("p");
//   descPara.className = "mt-2 text-sm text-gray-700";
//   descPara.textContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

//   // Create the link container div
//   const linkContainer = document.createElement("div");
//   linkContainer.className = "flex items-center gap-2 mt-3 cursor-pointer";

//   // Create the link
//   const link = document.createElement("a");
//   link.href = "DetailsPage.html";
//   link.className =
//     "inline-block text-sm font-medium text-indigo-600 hover:underline";
//   link.textContent = "View details";

//   // Create the arrow image
//   const arrowImg = document.createElement("img");
//   arrowImg.src = "../rendeezvous-js/image/Arrow--up-right.png";
//   arrowImg.alt = "top arrow";
//   arrowImg.className = "text-indigo-600";

//   // Assemble the structure
//   innerImageDiv.appendChild(img);
//   imageContainer.appendChild(innerImageDiv);
//   linkContainer.appendChild(link);
//   linkContainer.appendChild(arrowImg);
//   contentDiv.appendChild(title);
//   contentDiv.appendChild(datePara);
//   contentDiv.appendChild(descPara);
//   contentDiv.appendChild(linkContainer);
//   cardDiv.appendChild(imageContainer);
//   cardDiv.appendChild(contentDiv);
//   section.appendChild(cardDiv);

//   eventContainer.appendChild(section);
// };

// createEventContainer(eventData[0]);
// createEventContainer(eventData[1]);
// createEventContainer(eventData[2]);

// const baseUrl = "https://fakestoreapi.com/products";

// fetch(baseUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     const targetElement = document.getElementById("event-container");
//     targetElement.innerHTML = "";

//     data.slice(0, 6).forEach((product) => {
//       createEventContainer(product, targetElement);
//     });
//   })
//   .catch((err) => console.error("Error fetching data:", err));

// class Product {
//   constructor({ id, title, price, category, description, image }) {
//     this.id = id;
//     this.name = title;
//     this.price = price;
//     this.category = category;
//     this.description = description;
//     this.image = image;
//   }
// }

// class ProductService {
//   baseUrl = "https://fakestoreapi.com/products";

//   async getProducts(limit = null) {
//     const response = await fetch(this.baseUrl);
//     const data = await response.json();
//     let products = data.map((item) => new Product(item));
//     return limit ? products.slice(0, limit) : products;
//   }

//   async getProductById(id) {
//     const response = await fetch(`${this.baseUrl}/${id}`);
//     const data = await response.json();
//     return new Product(data);
//   }

//   // placeholders for later
//   updateProduct(id, updatedData) {}
//   addProduct(productData) {}
//   deleteProduct(id) {}
// }

// const productService = new ProductService();

// async function renderProducts() {
//   const products = await productService.getProducts(4);
//   const targetElement = document.getElementById("event-container");
//   targetElement.innerHTML = "";

//   products.forEach((product) => {
//     createEventContainer(product, targetElement);
//   });
// }

// renderProducts();

// const createEventContainer = (product, targetElement) => {
//   const section = document.createElement("section");
//   section.className = "pl-8 pt-16";

//   const cardDiv = document.createElement("div");
//   cardDiv.className =
//     "flex-shrink-0 width-[40%]  bg-white rounded-xl shadow-md overflow-hidden";

//   const imageContainer = document.createElement("div");
//   imageContainer.className =
//     "relative bg-orange-500 h-48 flex items-center justify-center";

//   // Image
//   const img = document.createElement("img");
//   img.src = product.image;
//   img.alt = product.title;
//   img.className = "max-h-full object-contain";

//   imageContainer.appendChild(img);

//   // Content div
//   const contentDiv = document.createElement("div");
//   contentDiv.className = "p-5";

//   // Title
//   const title = document.createElement("h2");
//   title.className = "text-lg font-semibold";
//   title.textContent = product.title;

//   // Price
//   const pricePara = document.createElement("p");
//   pricePara.className = "text-sm text-gray-600";
//   pricePara.textContent = `$${product.price}`;

//   // Description
//   const descPara = document.createElement("p");
//   descPara.className = "mt-2 text-sm text-gray-700 line-clamp-3";
//   descPara.textContent = product.description;

//   // Link container
//   const linkContainer = document.createElement("div");
//   linkContainer.className = "flex items-center gap-2 mt-3 cursor-pointer";

//   const link = document.createElement("a");
//   link.href = "DetailsPage.html";
//   link.className =
//     "inline-block text-sm font-medium text-indigo-600 hover:underline";
//   link.textContent = "View details";

//   const arrowImg = document.createElement("img");
//   arrowImg.src = "../rendeezvous-js/image/Arrow--up-right.png";
//   arrowImg.alt = "top arrow";
//   arrowImg.className = "w-4 h-4 text-indigo-600";

//   linkContainer.appendChild(link);
//   linkContainer.appendChild(arrowImg);

//   // Assemble content
//   contentDiv.appendChild(title);
//   contentDiv.appendChild(pricePara);
//   contentDiv.appendChild(descPara);
//   contentDiv.appendChild(linkContainer);

//   cardDiv.appendChild(imageContainer);
//   cardDiv.appendChild(contentDiv);
//   section.appendChild(cardDiv);

//   targetElement.appendChild(section);
// };

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

  async getProducts(limit = null) {
    const response = await fetch(this.baseUrl);
    const data = await response.json();
    return (limit ? data.slice(0, limit) : data).map(
      (item) => new Product(item)
    );
  }

  async getProductById(id) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = await response.json();
    return new Product(data);
  }
}

const productService = new ProductService();

function createEventContainer(product, targetElement) {
  const section = document.createElement("section");
  section.addEventListener("click", () => {
    window.location.href = "DetailsPage.html?productId=${product.id}";
  });
  section.className = "pl-8 pt-16 cursor-pointer";

  const cardDiv = document.createElement("div");
  cardDiv.className =
    "flex-shrink-0 w-[40%] bg-white rounded-xl shadow-md overflow-hidden";

  const imageContainer = document.createElement("div");
  imageContainer.className =
    "relative bg-orange-500 h-48 flex items-center justify-center";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  img.className = "max-h-full object-contain";
  imageContainer.appendChild(img);

  const contentDiv = document.createElement("div");
  contentDiv.className = "p-5";

  const title = document.createElement("h2");
  title.className = "text-lg font-semibold";
  title.textContent = product.title;

  const pricePara = document.createElement("p");
  pricePara.className = "text-sm text-gray-600";
  pricePara.textContent = `$${product.price}`;

  const descPara = document.createElement("p");
  descPara.className = "mt-2 text-sm text-gray-700 line-clamp-3";
  descPara.textContent = product.description;

  contentDiv.append(title, pricePara, descPara);

  cardDiv.append(imageContainer, contentDiv);
  section.appendChild(cardDiv);
  targetElement.appendChild(section);
}

async function renderProducts() {
  const products = await productService.getProducts(4);
  console.log("Products loaded:", products);
  const targetElement = document.getElementById("event-container");
  targetElement.innerHTML = "";
  products.forEach((product) => createEventContainer(product, targetElement));
}

renderProducts();

// Class creation 24/09/2025

class myProduct {
  constructor(id, title, price, description, category, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
  getProductDetails() {
    return `
      ID: ${this.id}
      Title: ${this.title}
      Price: $${this.price}
      Description: ${this.description}
      Category: ${this.category}
      Image: ${this.image}
    `;
  }
}
const productInformation = new myProduct(
  1,
  "Cosmetics",
  10.99,
  "Natural cosmetic product",
  "Cosmetics",
  "../rendeezvous-js/image/card-one-image.png"
);

console.log(productInformation.getProductDetails());

// Class with a method

// class productService {
//   constructor() {
//     this.products = [];
//   }

//   addProduct(product) {
//     this.products.push(product);
//   }
// }

// class ProductService {
//   constructor() {
//     this.products = [];
//   }

//   getProducts() {
//     return this.products;
//   }

//   getProductById(id) {
//     return this.products.find((product) => product.id === id) || null;
//   }

//   addProduct(product) {
//     this.products.push(product);
//     return product;
//   }

//   deleteProduct(id) {
//     const index = this.products.findIndex((product) => product.id === id);
//     if (index !== -1) {
//       return this.products.splice(index, 1)[0];
//     }
//     return null;
//   }
// }

// const service = new ProductService();

// service.addProduct({
//   id: 1,
//   title: "Laptop",
//   price: 1200,
//   description: "Gaming laptop",
//   category: "Electronics",
//   image: "http://example.com/laptop.jpg",
// });
// service.addProduct({
//   id: 2,
//   title: "Shoes",
//   price: 80,
//   description: "Running shoes",
//   category: "Fashion",
//   image: "http://example.com/shoes.jpg",
// });

// console.log(service.getProducts());

// console.log(service.getProductById(1));

// console.log(service.deleteProduct(2));

// console.log(service.getProducts());

// EXAMPLE TWO

// class Product {
//   constructor({ id, name, price, category, description }) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.category = category;
//     this.description = description;
//   }
// }

// class ProductService {
//   baseUrl = "https://fakestoreapi.com/products";

//   async getProducts() {
//     const response = await fetch(this.baseUrl);
//     const data = await response.json();
//     return data.map((item) => new Product(item));
//   }
//   async getProductById(id) {
//     const response = await fetch(`${this.baseUrl}/${id}`);
//     const data = await response.json();
//     return new Product(data);
//   }

//   updateProduct(id) {}
//   addProduct() {}
//   deleteProduct(id) {}
// }

// (async () => {
//   const service = new ProductService();

//   console.log("All Products:");
//   console.log(await service.getProducts());

//   console.log("Product with ID 1:");
//   console.log(await service.getProductById(1));
// })();
