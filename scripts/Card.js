import { imgPopupElement, img, caption, openPopup } from './utils.js'

export class Card {
  constructor({ name, link }, templateElementSelector) {
    this._name = name;
    this._link = link;
    this._templateElementSelector = templateElementSelector;

    this._placeTemplate = document.querySelector(templateElementSelector)
      .content.querySelector('.places__place');
  }
  _imgPopupHandler = () => {
    img.src = this._link;
    img.alt = this._name;
    caption.textContent = this._name;
    openPopup(imgPopupElement);
  }
  _addEventListeners() {
    const deletePlace = this._placeElement.querySelector('.trash-btn');
    const likeBtn = this._placeElement.querySelector('.places__btn');
    const placeImg = this._placeElement.querySelector('.places__image');

    deletePlace.addEventListener('click', () => {
      this._placeElement.remove();
    });
    placeImg.addEventListener('click', this._imgPopupHandler);
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('places__btn_active');
    });

  }

  getCardElement = () => {
    this._placeElement = this._placeTemplate.cloneNode(true);

    const placeImg = this._placeElement.querySelector('.places__image');
    const placeTitle = this._placeElement.querySelector('.places__title');


    placeImg.alt = this._name;
    placeImg.src = this._link;
    placeTitle.textContent = this._name;

    this._addEventListeners();

    return this._placeElement;
  }
}
