const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];
const places = document.querySelector(".places");
const placeTemplate = document.querySelector("#place-template").content;
let placeElement = placeTemplate.querySelector('.places__place')
let placesImg;
let placesTitle;
for (let card of initialCards) {
  placeElement = placeTemplate.cloneNode(true);
  placesImg = placeElement.querySelector('.places__image');
  placesTitle = placeElement.querySelector('.places__title');
  placesImg.src = card.link;
  placesImg.alt = card.name;
  placesTitle.textContent = card.name;
  places.append(placeElement);
}