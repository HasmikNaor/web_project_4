import "./styles.css";
import { createCard } from '../utils/utils'
import { settings, editBtn, addNewPlaceBtn, dataForEditForm, dataForNewPlace, editProfileForm, addNewPlaceForm, inputName, inputJob } from '../utils/constants';
import FormValidator from "../components/FormValidator";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import { initialCards } from "../initial-cards";

export const editFormValidator = new FormValidator(settings, editProfileForm);
export const addCardFormValidator = new FormValidator(settings, addNewPlaceForm);
export const renderInitialCards = new Section({ items: initialCards, renderer: createCard }, '.places')
export const popupImg = new PopupWithImage('.popup_image');
const editProfilePopup = new PopupWithForm(dataForEditForm);
const addNewPlacePopup = new PopupWithForm(dataForNewPlace);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
renderInitialCards.renderItmes();
popupImg.setEventListeners();
editProfilePopup.setEventListeners();
addNewPlacePopup.setEventListeners();

export const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle'
});

editBtn.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputJob.value = data.job;

  editProfilePopup.open();
  editProfileForm.reset();

  editFormValidator.toggleButtonState();
});


addNewPlaceBtn.addEventListener('click', () => {
  addNewPlacePopup.open();
  addNewPlaceForm.reset();
  addCardFormValidator.toggleButtonState();
})

