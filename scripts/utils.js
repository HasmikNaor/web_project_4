export const imgPopupElement = document.querySelector('.popup_image');
export const img = imgPopupElement.querySelector('.popup__image');
export const caption = imgPopupElement.querySelector('.popup__caption');

const clickOnOverlayHundler = (e) => {
  const classes = e.target.classList;
  const popup = e.target;
  if (classes.contains('popup')) {
    closePopup(popup);
  }
}

const keydownEventHandler = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
}

export const openPopup = (popup) => {
  popup.classList.add("popup_open");

  document.addEventListener('click', clickOnOverlayHundler);

  document.addEventListener("keydown", keydownEventHandler);
}

export const closePopup = (popup) => {
  popup.classList.remove("popup_open");

  document.removeEventListener('click', clickOnOverlayHundler);

  document.removeEventListener("keydown", keydownEventHandler);

}
