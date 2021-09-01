const editBtn = document.querySelector(".profile__edit-btn");
const editProfile = document.querySelector(".edit-profile");
const closeBtn = document.querySelector(".edit-profile__close-btn");
const inputName = document.querySelector(".edit-profile__input_enter_name");
const inputAbout = document.querySelector(".edit-profile__input_enter_about");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formContent = document.querySelector(".edit-profile__form-content");
const addNewPlaceBtn = document.querySelector('.profile__add-button');
const inputCardTitle = document.querySelector('.add-new-place__input_enter_title');;
const inputCardUrl = document.querySelector('.add-new-place__input_enter_url');;
const addNewPlace = document.querySelector(".add-new-place");
const addNewPlaceForm = document.querySelector('.add-new-place__form');
const addNewPlaceSaveBtn = document.querySelector('.add-new-place__save-btn');
const addNewPlaceCloseBtn = document.querySelector('.add-new-place__close-btn');
const imgPopup = document.querySelector('#img-popup').content;
const imgPopupElement = imgPopup.querySelector('.img-popup');
const closeImgPopup = imgPopupElement.querySelector('.img-popup__close-btn');
const page = document.querySelector('.page');
const img = imgPopupElement.querySelector('.img-popup__image');
const caption = imgPopupElement.querySelector('.img-popup__caption');

const places = document.querySelector(".places");
const placeTemplate = document.querySelector("#place-template").content;
let placeElement = placeTemplate.querySelector('.places__place')
let placesImg;
let placesTitle;