export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close(this);
    }
  }

  _handleClickOnOverlayClose = (e) => {
    const classes = e.target.className;
    if (this._popup.className === classes) {
      this.close(this);
    }
  }

  open() {
    this._popup.classList.add("popup_open");

    document.addEventListener('click', this._handleClickOnOverlayClose);

    document.addEventListener("keydown", this._handleEscClose);
  }

  close(thisElement) {
    thisElement._popup.classList.remove("popup_open");

    document.removeEventListener('click', thisElement._handleClickOnOverlayClose);

    document.removeEventListener("keydown", thisElement._handleEscClose);
  }

  setEventListeners() {
    this._closeIcon = this._popup.querySelector('.popup__close-btn').addEventListener("click", () => this.close(this));
  }
}

