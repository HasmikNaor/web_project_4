import "./styles.css";
import { createCard } from '../utils/utils'
import { settings, editBtn, addNewPlaceBtn, dataForEditForm, dataForNewPlace, dataForEditAvatar, editProfileForm, addNewPlaceForm, inputName, inputJob, editAvatarImg, ProfileImgTemplate, addNewAvatarForm } from '../utils/constants';
import FormValidator from "../components/FormValidator";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithSubmit from "../components/PopupWithSubmit";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import { api } from "../components/Api"

export const editFormValidator = new FormValidator(settings, editProfileForm);
export const addCardFormValidator = new FormValidator(settings, addNewPlaceForm);
export const addNewAvatarValidator = new FormValidator(settings, addNewAvatarForm);
export const renderInitialCards = new Section({ items: [], renderer: createCard }, '.places')
export const popupImg = new PopupWithImage('.popup_image');
const editProfilePopup = new PopupWithForm(dataForEditForm);
const addNewPlacePopup = new PopupWithForm(dataForNewPlace);
export const avatarForm = new PopupWithForm(dataForEditAvatar);
export const confirmModal = new PopupWithSubmit('.popup_type_delete-card');
export const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle'
},
  ProfileImgTemplate
);
export let userId;
export let ownerId;

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addNewAvatarValidator.enableValidation();
popupImg.setEventListeners();
editProfilePopup.setEventListeners();
addNewPlacePopup.setEventListeners();
confirmModal.setEventListeners();
avatarForm.setEventListeners();


Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    userInfo.setUserAvatar(userData);
    renderInitialCards.items = cards;
    renderInitialCards.renderItems();
    userInfo.setUserInfo(userData.name, userData.about);
  })
  .catch([err => console.log(err), err => console.log(err)])

editBtn.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputJob.value = data.job;

  editProfilePopup.open();

  editFormValidator.toggleButtonState();
});


addNewPlaceBtn.addEventListener('click', () => {
  addNewPlacePopup.open();
  addCardFormValidator.toggleButtonState();
})

editAvatarImg.addEventListener('click', () => avatarForm.open())

