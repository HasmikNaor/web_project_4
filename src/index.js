import "./pages/styles.css";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import { initialCards } from "./initial-cards";

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

const addNewPlaceBtn = document.querySelector('.profile__add-button');
const addNewPlace = document.querySelector(".popup_add-new-place");
const editProfileInputs = [...editProfile.querySelectorAll('.popup__input')];
const addNewPlaceInputs = [...addNewPlace.querySelectorAll('.popup__input')];

function createCard(element) {
  const newCard = new Card(element, '#place-template', (element) => {
    const popupImg = new PopupWithImage(element, '.popup_image');
    popupImg.setEventListeners();
    popupImg.open();
  });
  return newCard.getCardElement();
}

const renderInitialCards = new Section({ items: initialCards, renderer: createCard }, '.places')
renderInitialCards.renderItmes();


editBtn.addEventListener('click', () => {
  const profileName = document.querySelector(".profile__name");
  const profileSubtitle = document.querySelector(".profile__subtitle");

  const data = {
    formPopupSelector: '.popup_edit-profile',

    handleFormSubmit(values) {
      profileName.textContent = values.name;
      profileSubtitle.textContent = values.job;
    }
  };

  const editProfilePopup = new PopupWithForm(data);
  const userInfo = new UserInfo({
    profileNameSelector: '.profile__name',
    profileJobSelector: '.profile__subtitle'
  }, '.popup__form_edit-profile');

  editProfilePopup.open();
  editProfilePopup.setEventListeners();
  userInfo.setUserInfo();

  editProfileInputs.forEach(input => {
    editFormValidator.hideError(input);
  });

  editFormValidator.toggleButtonState();
});

function handleNewPlaceFormSubmit(values) {
  const addNewCard = new Section({ items: [values], renderer: createCard }, '.places')
  addNewCard.renderItmes();
}

addNewPlaceBtn.addEventListener('click', () => {
  const data = {
    formPopupSelector: '.popup_add-new-place',
    handleFormSubmit: handleNewPlaceFormSubmit
  };

  const addNewPlacePopup = new PopupWithForm(data);
  addNewPlacePopup.open();
  addNewPlacePopup.setEventListeners();

  addNewPlaceInputs.forEach(input => {
    addCardFormValidator.hideError(input);
  });

  addCardFormValidator.toggleButtonState();
})

