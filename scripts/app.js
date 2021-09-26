import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";
import { Card } from "./Card.js";
import { initialCards } from "./initial-cards.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__input_theme_error",
  errorClass: "popup__error_visible"
}

const editProfileForm = document.querySelector(".popup__form_edit-profile");
const addNewPlaceForm = document.querySelector('.popup__form_add-new-place');

const editFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addNewPlaceForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const editBtn = document.querySelector(".profile__edit-btn");
const editProfile = document.querySelector(".popup_edit-profile");
const editProfileCloseBtn = document.querySelector(".popup__close-btn_edit-profile");
const inputName = document.querySelector(".popup__input_edit-profile_name");
const inputAbout = document.querySelector(".popup__input_edit-profile_about");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const addNewPlaceBtn = document.querySelector('.profile__add-button');
const inputCardTitle = document.querySelector('.popup__input_new-place_title');
const inputCardUrl = document.querySelector('.popup__input_new-place_url');;
const addNewPlace = document.querySelector(".popup_add-new-place");
const addNewPlaceCloseBtn = document.querySelector('.popup__close-btn_add-new-place');
const imgPopupElement = document.querySelector('.popup_image');
const closeImgPopup = imgPopupElement.querySelector('.popup__close-btn');
const places = document.querySelector(".places");
const editProfileInputs = [...editProfile.querySelectorAll('.popup__input')];
const addNewPlaceInputs = [...addNewPlace.querySelectorAll('.popup__input')];

initialCards.forEach(card => addNewCard(card));



function saveEditProfileBtnHandler(e) {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(editProfile);
  e.preventDefault();
}

function createCard(element) {
  const newCard = new Card(element, '#place-template');
  return newCard.getCardElement();
}

function addNewCard(element) {
  places.prepend(createCard(element));
}

function savePlaceHandler(e) {
  const newCardValues = {
    name: inputCardTitle.value,
    link: inputCardUrl.value
  }
  addNewCard(newCardValues);
  addNewPlaceForm.reset();
  closePopup(addNewPlace);

  e.preventDefault();
}

editBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileSubtitle.textContent;

  editProfileInputs.forEach(input => {
    editFormValidator.hideError(input);
  });

  editFormValidator.toggleButtonState();
  openPopup(editProfile);
});
editProfileCloseBtn.addEventListener('click', () => closePopup(editProfile));
editProfileForm.addEventListener('submit', saveEditProfileBtnHandler);
addNewPlaceForm.addEventListener('submit', savePlaceHandler);
addNewPlaceBtn.addEventListener('click', () => {
  addCardFormValidator.toggleButtonState();
  addNewPlaceInputs.forEach(input => addCardFormValidator.hideError(input));
  openPopup(addNewPlace)
});

addNewPlaceCloseBtn.addEventListener('click', () => closePopup(addNewPlace));
closeImgPopup.addEventListener('click', () => closePopup(imgPopupElement));
