import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector('.popup__form');

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler();
      this.close();
    })
  }
}
