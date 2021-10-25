import "./styles.css";
import { settings, editBtn, addNewPlaceBtn, editProfileForm, addNewPlaceForm, inputName, inputJob, editAvatarImg, ProfileImgTemplate, addNewAvatarForm } from '../utils/constants';
import FormValidator from "../components/FormValidator";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithSubmit from "../components/PopupWithSubmit";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import Card from "../components/Card";
import { api } from "../components/Api"

export const editFormValidator = new FormValidator(settings, editProfileForm);
export const addCardFormValidator = new FormValidator(settings, addNewPlaceForm);
export const addNewAvatarValidator = new FormValidator(settings, addNewAvatarForm);
export const renderInitialCards = new Section({ items: [], renderer: createCard }, '.places')

const dataForEditForm = {
  formPopupSelector: '.popup_edit-profile',

  handleFormSubmit(values) {
    const saveBtn = document.querySelector('.popup__save-btn_edit-profile');
    api.setUserData(values.name, values.job)
      .then(() => {
        userInfo.setUserInfo(values.name, values.job);
        editProfilePopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        saveBtn.textContent = 'Save';
      })
    saveBtn.textContent = 'Save...';
  }
};

function handleNewPlaceFormSubmit(data) {
  const saveBtn = document.querySelector('.popup__save-btn_add-new-place');
  api.createCard(data)
    .then(res => {
      renderInitialCards.items = [res];
      renderInitialCards.renderItems();
      addNewPlacePopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      saveBtn.textContent = 'Save';
    })
  saveBtn.textContent = 'Save...'
}


const dataForNewPlace = {
  formPopupSelector: '.popup_add-new-place',
  handleFormSubmit: handleNewPlaceFormSubmit
};

const dataForEditAvatar = {
  formPopupSelector: '.popup_type_edit-avatar',
  handleFormSubmit(inputValue) {
    const saveBtn = document.querySelector('.popup__save-btn_edit-avatar');
    api.updateAvatar(inputValue.link).
      then((res) => {
        userInfo.setUserAvatar(res)
        avatarForm.close();

        console.log(avatarForm)
      })
      .catch(err => console.log(err))
      .finally(() => {
        saveBtn.textContent = 'Save';
      })
    saveBtn.textContent = 'Save...';
  }
}
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

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addNewAvatarValidator.enableValidation();
popupImg.setEventListeners();
editProfilePopup.setEventListeners();
addNewPlacePopup.setEventListeners();
confirmModal.setEventListeners();
avatarForm.setEventListeners();

export function createCard(card) {
  const likes = card.likes;
  const cardOwnerId = card.owner._id;

  const newCard = new Card(card,
    '#place-template',
    () => {
      popupImg.open(card);
    },
    () => {
      confirmModal.open();
      confirmModal.setAction(() => {
        api.deleteCard(card._id).
          then(() => {
            newCard.placeElement.remove();
            newCard.placeElement = null;
            confirmModal.close();
          })
          .catch(err => console.log(err))
      })
    },
    () => {
      if (cardOwnerId !== userId) {
        newCard.placeElement.querySelector('.trash-btn').style.display = 'none'
      }
    },
    () => {
      newCard.likes = newCard.placeElement.querySelector('.card__likes-count')
      newCard.likes.textContent = likes.length;

      likes.forEach((like) => {
        if (like._id === userId) {
          const likeBtn = newCard.placeElement.querySelector('.places__btn');
          likeBtn.classList.add('places__btn_active');
        }
      })
    },
    () => {
      const likeBtn = newCard.placeElement.querySelector('.places__btn');
      if (likeBtn.classList.contains('places__btn_active')) {
        api.deleteLike(card._id)
          .then(res => {
            newCard.likes.textContent = res.likes.length;
            likeBtn.classList.toggle('places__btn_active');
          })
          .catch(err => console.log(err))
      } else {
        api.addLike(card._id)
          .then(res => {
            newCard.likes.textContent = res.likes.length;
            likeBtn.classList.toggle('places__btn_active');
          })
          .catch(err => console.log(err))
      }
    }
  );
  return newCard.getCardElement();
}




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

