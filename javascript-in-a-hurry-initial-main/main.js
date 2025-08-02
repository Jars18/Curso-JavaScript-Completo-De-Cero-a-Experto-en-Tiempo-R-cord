//Ejemplo práctico: Añadir o quitar la clase "nav-open", segun se haga click en un botón, para abrir o cerrar un menú.
const galleryImages = [
  { src: "./assets/gallery/image1.jpg", alt: "image 1" },
  { src: "./assets/gallery/image2.jpg", alt: "image 2" },
  { src: "./assets/gallery/image3.jpg", alt: "image 3" },
];

function menuHandler() {
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document
        .querySelector("header nav .wrapper")
        .classList.remove("nav-open");
    });
}

function celsiusToFahr(temperature) {
  let fahr = temperature * (9 / 5) + 32;
  return fahr;
}

function greetingHandler() {
  let currentHour = new Date().getHours();
  let greetingText =
    currentHour < 12
      ? "Good morning"
      : currentHour < 19
      ? "Good Afternoon"
      : currentHour < 24
      ? "Good Evening"
      : "Welcome";
  let weatherCondition = "sunny";
  let userLocation = "Rio de Janeiro";
  let temperature = 26;
  let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
    1
  )}°C outside.`;
  let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
    temperature
  ).toFixed(1)}°F outside.`;
  document.querySelector("#greeting").innerHTML = greetingText;
  document.querySelector("p#weather").innerHTML = celsiusText;
  document
    .querySelector(".weather-group")
    .addEventListener("click", function (e) {
      if (e.target.id === "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
      } else {
        document.querySelector("p#weather").innerHTML = fahrText;
      }
    }); //weather-group es class por eso lleva "." para buscarlo. "#" es para id
  //"e" es para saber que pasa como eventos
}

function clockHandler() {
  setInterval(function () {
    let localtime = new Date();
    // elemento que tenga un atributo específico: span[data-time=hours]
    document.querySelector("span[data-time=hours]").textContent = localtime
      .getHours()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localtime
      .getMinutes()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localtime
      .getSeconds()
      .toString()
      .padStart(2, "0");
  }, 1000); // funcion que queremos retrasar 3 segundos, despues de 3 segundos todo lo que este en la función se va a ejecutar
}

function galleryHandler() {
  let mainImage = document.querySelector("#gallery > img"); // padre id=gallery, hijo elemento img
  let thumbnails = document.querySelector("#gallery .thumbnails"); // padre id=gallery, hijo clase thumbnails
  mainImage.src = galleryImages[0].src; //añado un valor (galleryImages[0].src) a la propiedad src del mainImage
  mainImage.alt = galleryImages[0].alt;
  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img"); //crea una etiqueta
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index; //establece la propiedad data-array-index
    thumb.dataset.selected = index === 0 ? true : false;
    thumb.addEventListener("click", function (e) {
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;
      thumbnails.querySelectorAll("img").forEach(function (img) {
        img.dataset.selected = false;
      });
      e.target.dataset.selected = true;
    });
    thumbnails.appendChild(thumb);
  });
}

//pageLoad
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();

//<div class="product-item">
//    <img src="./assets/products/img6.png" alt="AstroFiction">
//       <div class="product-details">
//          <h3 class="product-title">AstroFiction</h3>
//          <p class="product-author">John Doe</p>
//          <p class="price-title">Price</p>
//          <p class="product-price">$ 49.90</p>
//       </div>
//</div>

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

function productsHandler() {
  let productsSection = document.querySelector(".products-area");
  products.forEach(function (product, index) {
    let productItem = document.createElement("div");
    productItem.classList.add("product-item");

    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;

    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = product.title;

    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent =
      product.price === 0 ? "Free" : "$" + product.price.toFixed(2);

    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);

    productItem.append(productImage);
    productItem.append(productDetails);

    productsSection.append(productItem);
  });
}

productsHandler();
