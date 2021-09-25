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

initialCards.forEach(card => addNewCard(card));



function saveEditProfileBtnHandler(e) {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(editProfile);
  e.preventDefault();
}

function addNewCard(element) {
  const newCard = new Card(element, '#place-template');
  newCard.getCardElement()
  places.prepend(newCard.getCardElement());
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

  const inputs = [...editProfile.querySelectorAll('.popup__input')];
  inputs.forEach(input => {
    editFormValidator.hideError(input);
  });

  editFormValidator.toggleButtonState();
  openPopup(editProfile);
});
editProfileCloseBtn.addEventListener('click', () => closePopup(editProfile));
editProfileForm.addEventListener('submit', saveEditProfileBtnHandler);
addNewPlaceForm.addEventListener('submit', savePlaceHandler);
addNewPlaceBtn.addEventListener('click', () => {
  const settings = {
    inputErrorClass: "popup__input_theme_error",
    inactiveButtonClass: "popup__save-btn_disabled"
  }
  const inputs = [...addNewPlace.querySelectorAll('.popup__input')];
  const button = addNewPlace.querySelector('.popup__save-btn');
  addCardFormValidator.toggleButtonState();
  inputs.forEach(input => addCardFormValidator.hideError(input, settings));
  openPopup(addNewPlace)
});

addNewPlaceCloseBtn.addEventListener('click', () => closePopup(addNewPlace));
closeImgPopup.addEventListener('click', () => closePopup(imgPopupElement));
