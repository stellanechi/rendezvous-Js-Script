const eventData = [
  {
    id: 1,
    title: "ISWIS Live show",
    date: "Sun, Oct 3rd • 6pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: "../rendeezvous-js/image/card-one-image.png",
    detailsUrl: "DetailsPage.html",
  },
  {
    id: 2,
    title: "Music Festival 2024",
    date: "Sat, Oct 16th • 8pm",
    description:
      "Experience the best live music performances from top artists around the world. Join us for an unforgettable night of entertainment.",
    image: "../rendeezvous-js/image/card-two.png",
    detailsUrl: "DetailsPage.html",
  },
  {
    id: 3,
    title: "Art Exhibition Opening",
    date: "Fri, Oct 22nd • 7pm",
    description:
      "Discover contemporary art from emerging and established artists. Wine and refreshments will be served during the opening reception.",
    image: "../rendeezvous-js/image/card-three.png",
    detailsUrl: "DetailsPage.html",
  },
];

const createEventContainer = (event) => {
  const eventContainer = document.createElement("div");
  eventContainer.id = "event-container";
  eventContainer.className = "flex flex-row overflow-x-auto pl-10 pr-10";

  const targetElement = document.getElementById("event-container");
  targetElement.appendChild(eventContainer);

  // Create the section element
  const section = document.createElement("section");
  section.className = "pl-8 pt-16";

  // Create the main card div
  const cardDiv = document.createElement("div");
  cardDiv.className = "max-w-sm bg-white rounded-xl shadow-md overflow-hidden";

  // Create the image container div
  const imageContainer = document.createElement("div");
  imageContainer.className =
    "relative bg-orange-500 h-48 flex items-center justify-center";

  // Create the inner div for image
  const innerImageDiv = document.createElement("div");
  innerImageDiv.className = "";

  // Create the image element
  const img = document.createElement("img");
  img.src = event.image;
  img.alt = "person 1";
  img.className = "";

  // Create the content div
  const contentDiv = document.createElement("div");
  contentDiv.className = "p-5";

  // Create the title
  const title = document.createElement("h2");
  title.className = "text-lg font-semibold";
  title.textContent = event.title;

  // Create the date paragraph
  const datePara = document.createElement("p");
  datePara.className = "text-sm text-gray-600";
  datePara.textContent = event.date;

  // Create the description paragraph
  const descPara = document.createElement("p");
  descPara.className = "mt-2 text-sm text-gray-700";
  descPara.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

  // Create the link container div
  const linkContainer = document.createElement("div");
  linkContainer.className = "flex items-center gap-2 mt-3 cursor-pointer";

  // Create the link
  const link = document.createElement("a");
  link.href = "DetailsPage.html";
  link.className =
    "inline-block text-sm font-medium text-indigo-600 hover:underline";
  link.textContent = "View details";

  // Create the arrow image
  const arrowImg = document.createElement("img");
  arrowImg.src = "../rendeezvous-js/image/Arrow--up-right.png";
  arrowImg.alt = "top arrow";
  arrowImg.className = "text-indigo-600";

  // Assemble the structure
  innerImageDiv.appendChild(img);
  imageContainer.appendChild(innerImageDiv);
  linkContainer.appendChild(link);
  linkContainer.appendChild(arrowImg);
  contentDiv.appendChild(title);
  contentDiv.appendChild(datePara);
  contentDiv.appendChild(descPara);
  contentDiv.appendChild(linkContainer);
  cardDiv.appendChild(imageContainer);
  cardDiv.appendChild(contentDiv);
  section.appendChild(cardDiv);

  eventContainer.appendChild(section);
};

createEventContainer(eventData[0]);
createEventContainer(eventData[1]);
createEventContainer(eventData[2]);
// createEventContainer();
// createEventContainer();
