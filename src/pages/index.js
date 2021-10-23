import "./styles.css";
import { createCard } from '../utils/utils'
import { settings, editBtn, addNewPlaceBtn, dataForEditForm, dataForNewPlace, editProfileForm, addNewPlaceForm, inputName, inputJob, editAvatarImg, ProfileImgTemplate, addNewAvatarForm } from '../utils/constants';
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
export const confirmModal = new PopupWithSubmit('.popup_type_delete-card');
export const avatarForm = new PopupWithSubmit('.popup_type_edit-avatar');
export const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__subtitle'
});
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

// update the profile picture when the page loads
api.getUserInfo().then((res) => {
  ProfileImgTemplate.src = res.avatar
})

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    renderInitialCards._items = cards;
    renderInitialCards.renderItems();
    userInfo.setUserInfo(userData.name, userData.about);
  })

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

editAvatarImg.addEventListener('click', () => {
  let avatarUrlInput = avatarForm._popup.querySelector('.popup__input');

  avatarForm.open();
  avatarForm.setAction(() => {
    api.updateAvatar(avatarUrlInput.value).
      then((res) => {
        ProfileImgTemplate.src = res.avatar;
      })
  })
})

