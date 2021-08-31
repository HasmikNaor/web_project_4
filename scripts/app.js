const editBtn = document.querySelector(".profile__edit-btn");
const editProfile = document.querySelector(".edit-profile");
const closeBtn = document.querySelector(".edit-profile__close-btn");
const editName = document.querySelector(".edit-profile__input_enter_name");
const editAbout = document.querySelector(".edit-profile__input_enter_about");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formContent = document.querySelector(".edit-profile__form-content");
const addNewPlaceBtn = document.querySelector('.profile__add-button');
let title;
let url;
const addNewPlace = document.querySelector(".add-new-place");
const addNewPlaceForm = document.querySelector('.add-new-place__form');
const addNewPlaceSaveBtn = document.querySelector('.add-new-place__save-btn');
const addNewPlaceCloseBtn = document.querySelector('.add-new-place__close-btn');
const imgPopup = document.querySelector('#img-popup').content;
const imgPopupElement = imgPopup.querySelector('.img-popup');
const closeImgPopup = imgPopupElement.querySelector('.img-popup__close-btn');
const page = document.querySelector('.page');
function editBtnHandler() {
  editProfile.classList.add("edit-profile_open");
  editName.value = profileName.textContent;
  editAbout.value = profileSubtitle.textContent;
}

function saveBtnHandler(e) {
  profileName.textContent = editName.value;
  profileSubtitle.textContent = editAbout.value;
  editProfile.classList.remove("edit-profile_open");
  e.preventDefault();
}

function savePlaceHandler(e) {
  const placeTemplate = document.querySelector("#place-template").content;
  const placeElement = placeTemplate.querySelector('.places__place').cloneNode(true);
  const placesImg = placeElement.querySelector('.places__image');
  const placesTitle = placeElement.querySelector('.places__title');
  title = document.querySelector('.add-new-place__input_enter_title');
  url = document.querySelector('.add-new-place__input_enter_url');
  if (title.value && url.value) {
    placesImg.alt = title.value;
    placesImg.src = url.value;
    placesTitle.textContent = title.value;
    places.prepend(placeElement);
    title.value = "";
    url.value = "";
  }
  addNewPlace.classList.remove("add-new-place_open");
  e.preventDefault();
}
function trashHandler(e) {
  if (e.target.classList.contains('trash-img')) {
    e.target.parentElement.parentElement.classList.add('remove')
  }
}
function LikeHandler(e) {
  if (e.target.parentElement.classList.contains('places__btn')) {
    e.target.parentElement.parentElement.children[1].classList.toggle('places__btn_active');
    e.target.parentElement.parentElement.children[2].classList.toggle('places__btn_active');
  }
}
function imgPopupHandler(e) {
  const img = imgPopupElement.querySelector('.img-popup__image');
  const caption = imgPopupElement.querySelector('.img-popup__caption');
  if (e.target.classList.contains('places__image')) {
    const source = e.target.src;
    img.src = source
    img.alt = e.target.alt;
    caption.textContent = e.target.nextElementSibling.children[0].textContent;
    page.append(imgPopupElement);
  }
}
editBtn.addEventListener('click', editBtnHandler);
closeBtn.addEventListener('click', () => editProfile.classList.remove("edit-profile_open"));
formContent.addEventListener('submit', saveBtnHandler);
addNewPlaceBtn.addEventListener('click', () => addNewPlace.classList.add("add-new-place_open"));
addNewPlaceForm.addEventListener('submit', savePlaceHandler);
addNewPlaceCloseBtn.addEventListener('click', () => addNewPlace.classList.remove("add-new-place_open"));
places.addEventListener('click', trashHandler);
places.addEventListener('click', LikeHandler);
places.addEventListener('click', imgPopupHandler);
closeImgPopup.addEventListener('click', () => {
  imgPopupElement.remove();
});
