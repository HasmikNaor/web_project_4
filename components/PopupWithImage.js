import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ name, link }, imgPopupSelector) {
    super(imgPopupSelector);
    this._name = name;
    this._link = link;
  }
  open() {
    this._img = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__caption');

    this._img.src = this._link;
    this._img.alt = this._name;
    this._caption.textContent = this._name;

    super.open();
  }

}
