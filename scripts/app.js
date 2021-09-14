const editBtn = document.querySelector(".profile__edit-btn");
const editProfile = document.querySelector(".popup_edit-profile");
const editProfileCloseBtn = document.querySelector(".popup__close-btn_edit-profile");
const inputName = document.querySelector(".popup__input_edit-profile_name");
const inputAbout = document.querySelector(".popup__input_edit-profile_about");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const editProfileForm = document.querySelector(".popup__form_edit-profile");
const addNewPlaceBtn = document.querySelector('.profile__add-button');
const inputCardTitle = document.querySelector('.popup__input_new-place_title');
const inputCardUrl = document.querySelector('.popup__input_new-place_url');;
const addNewPlace = document.querySelector(".popup_add-new-place");
const addNewPlaceForm = document.querySelector('.popup__form_add-new-place');
const addNewPlaceSaveBtn = document.querySelector('.popup__save-btn_add-new-place');
const addNewPlaceCloseBtn = document.querySelector('.popup__close-btn_add-new-place');
const page = document.querySelector('.page');
const imgPopupElement = document.querySelector('.popup_image');
const closeImgPopup = imgPopupElement.querySelector('.popup__close-btn');
const img = imgPopupElement.querySelector('.popup__image');
const caption = imgPopupElement.querySelector('.popup__caption');
const places = document.querySelector(".places");
const placeTemplate = document.querySelector("#place-template").content;

initialCards.forEach((card) => addNewCard(createCard(card.name, card.link)));

function clickOnOverlayHundler(e) {
  const classes = e.target.classList;
  const popup = e.target;
  if (classes.contains('popup')) {
    closePopup(popup);
  }
}

function keydownEventHandler(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_open");

  document.addEventListener('click', clickOnOverlayHundler);

  document.addEventListener("keydown", keydownEventHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");

  document.removeEventListener('click', clickOnOverlayHundler);

  document.removeEventListener("keydown", keydownEventHandler);

}

function saveEditProfileBtnHandler(e) {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(editProfile);
  e.preventDefault();
}
function imgPopupHandler(e) {
  img.src = e.target.src;
  img.alt = e.target.alt;
  caption.textContent = e.target.alt;
  openPopup(imgPopupElement);
}
function createCard(cardName, cardLink) {
  const placeElement = placeTemplate.querySelector('.places__place').cloneNode(true);
  const placeImg = placeElement.querySelector('.places__image');
  const placeTitle = placeElement.querySelector('.places__title');
  const deletePlace = placeElement.querySelector('.trash-btn');
  const likeBtn = placeElement.querySelector('.places__btn');
  placeImg.alt = cardName;
  placeImg.src = cardLink;
  placeTitle.textContent = cardName;
  deletePlace.addEventListener('click', () => {
    placeElement.remove();
  })

  placeImg.addEventListener('click', imgPopupHandler)

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('places__btn_active');
  })
  return placeElement;
}

function addNewCard(element) {
  places.prepend(element);
}

function savePlaceHandler(e) {
  addNewCard(createCard(inputCardTitle.value, inputCardUrl.value));
  addNewPlaceForm.reset();
  closePopup(addNewPlace);
  e.preventDefault();
}

editBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileSubtitle.textContent;

  const settings = {
    inputErrorClass: "popup__input_theme_error",
    inactiveButtonClass: "popup__save-btn_disabled"
  }
  const inputs = [...editProfile.querySelectorAll('.popup__input')];
  const button = editProfile.querySelector('.popup__save-btn')
  inputs.forEach(input => hideError(input, settings));
  toggleButtonState(inputs, button, settings);
  openPopup(editProfile);
});
editProfileCloseBtn.addEventListener('click', () => closePopup(editProfile));
editProfileForm.addEventListener('submit', saveEditProfileBtnHandler);
addNewPlaceBtn.addEventListener('click', () => {
  const settings = {
    inputErrorClass: "popup__input_theme_error",
    inactiveButtonClass: "popup__save-btn_disabled"
  }
  const inputs = [...addNewPlace.querySelectorAll('.popup__input')];
  const button = addNewPlace.querySelector('.popup__save-btn');
  toggleButtonState(inputs, button, settings);
  inputs.forEach(input => hideError(input, settings));
  openPopup(addNewPlace)
});
addNewPlaceForm.addEventListener('submit', savePlaceHandler);
addNewPlaceCloseBtn.addEventListener('click', () => closePopup(addNewPlace));
closeImgPopup.addEventListener('click', () => closePopup(imgPopupElement));
