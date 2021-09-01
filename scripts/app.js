function openPopup(popup) {
  popup.classList.add("popup_open");
}
function closePopup(popup) {
  popup.classList.remove("popup_open");
  popup.classList.add("popup_close");
}
function reset(title, url) {
  title.value = "";
  url.value = "";
}
function editBtnHandler() {
  if (inputName.value && inputAbout.value) {
    inputName.value = profileName.textContent;
    inputAbout.value = profileSubtitle.textContent;
  }
  openPopup(editProfile);
}

function saveEditProfileBtnHandler(e) {
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(editProfile);
  e.preventDefault();
}

function savePlaceHandler(e) {
  const placeElement = placeTemplate.querySelector('.places__place').cloneNode(true);
  const placesImg = placeElement.querySelector('.places__image');
  const placesTitle = placeElement.querySelector('.places__title');
  if (inputCardTitle.value && inputCardUrl.value) {
    placesImg.alt = inputCardTitle.value;
    placesImg.src = inputCardUrl.value;
    placesTitle.textContent = inputCardTitle.value;
    places.prepend(placeElement);
    reset(inputCardTitle, inputCardUrl);
  }
  closePopup(addNewPlace);
  e.preventDefault();
}
function trashHandler(e) {
  if (e.target.classList.contains('trash-img')) {
    e.target.parentElement.parentElement.classList.add('remove')
  }
}
function toggleLikeBtn(element) {
  element.classList.toggle('places__btn_active');
}
function likeHandler(e) {
  if (e.target.parentElement.classList.contains('places__btn')) {
    toggleLikeBtn(e.target.parentElement.parentElement.children[1]);
    toggleLikeBtn(e.target.parentElement.parentElement.children[2]);
  }
}
function imgPopupHandler(e) {
  if (e.target.classList.contains('places__image')) {
    const source = e.target.src;
    img.src = source
    img.alt = e.target.alt;
    caption.textContent = e.target.nextElementSibling.children[0].textContent;
    page.append(imgPopupElement);
  }
  if (!(e.target.classList.contains('trash-img')))
    openPopup(imgPopupElement);
}
editBtn.addEventListener('click', editBtnHandler);
closeBtn.addEventListener('click', () => closePopup(editProfile));
formContent.addEventListener('submit', saveEditProfileBtnHandler);
addNewPlaceBtn.addEventListener('click', () => openPopup(addNewPlace));
addNewPlaceForm.addEventListener('submit', savePlaceHandler);
addNewPlaceCloseBtn.addEventListener('click', () => closePopup(addNewPlace));
places.addEventListener('click', trashHandler);
places.addEventListener('click', likeHandler);
places.addEventListener('click', imgPopupHandler);
closeImgPopup.addEventListener('click', () => closePopup(imgPopupElement));
