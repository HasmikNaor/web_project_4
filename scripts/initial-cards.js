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

function createCard(cardName, cardLink) {
  placeElement = placeTemplate.cloneNode(true);
  placesImg = placeElement.querySelector('.places__image');
  placesTitle = placeElement.querySelector('.places__title');
  placesImg.src = cardLink;
  placesImg.alt = cardName;
  placesTitle.textContent = cardName;
  places.append(placeElement);
  return placeElement
}

function insertCard(cards) {
  for (let card of cards) {
    places.append(createCard(card.name, card.link));
  }
}

insertCard(initialCards);