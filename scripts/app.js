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

initialCards.forEach((card) => places.prepend(createCard(card.name, card.link)));

function togglePopup(popup) {
  popup.classList.toggle("popup_open");
}

function reset(title, url) {
  title.value = "";
  url.value = "";
}

function saveEditProfileBtnHandler(e) {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  togglePopup(editProfile);
  e.preventDefault();
}
function imgPopupHandler(e) {
  img.src = e.target.src;
  img.alt = e.target.alt;
  caption.textContent = e.target.alt;
  togglePopup(imgPopupElement);
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

function savePlaceHandler(e) {
  places.prepend(createCard(inputCardTitle.value, inputCardUrl.value));
  reset(inputCardTitle, inputCardUrl);
  e.preventDefault();
}

editBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileSubtitle.textContent;
  togglePopup(editProfile);
});
editProfileCloseBtn.addEventListener('click', () => togglePopup(editProfile));
editProfileForm.addEventListener('submit', saveEditProfileBtnHandler);
addNewPlaceBtn.addEventListener('click', () => togglePopup(addNewPlace));
addNewPlaceForm.addEventListener('submit', savePlaceHandler);
addNewPlaceCloseBtn.addEventListener('click', () => togglePopup(addNewPlace));
closeImgPopup.addEventListener('click', () => togglePopup(imgPopupElement));
