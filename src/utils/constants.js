export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__input_theme_error",
  errorClass: "popup__error_visible"
}

export const editProfileForm = document.querySelector(".popup__form_edit-profile");
export const addNewPlaceForm = document.querySelector('.popup__form_add-new-place');
export const addNewAvatarForm = document.querySelector('.popup__form_edit-avatar')
export const editBtn = document.querySelector(".profile__edit-btn");
export const editProfile = document.querySelector(".popup_edit-profile");
export const addNewPlaceBtn = document.querySelector('.profile__add-button');
export const addNewPlace = document.querySelector(".popup_add-new-place");
export const editProfileInputs = [...editProfile.querySelectorAll('.popup__input')];
export const addNewPlaceInputs = [...addNewPlace.querySelectorAll('.popup__input')];
export const editAvatarImg = document.querySelector('.profile__image-container');
export const ProfileImgTemplate = document.querySelector('.profile__image');


export const inputName = editProfileForm.querySelector(".popup__input_edit-profile_name");
export const inputJob = editProfileForm.querySelector(".popup__input_edit-profile_about");

