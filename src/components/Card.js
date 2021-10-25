export default class Card {
  constructor({ name, link }, templateElementSelector, handleCardClick, handleDeleteCard, viewTrashBtn, likesCounter, likesHandler) {
    this._name = name;
    this._link = link;
    this._templateElementSelector = templateElementSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._viewTrashBtn = viewTrashBtn;
    this._likesCounter = likesCounter;
    this._likesHandler = likesHandler;
    this._placeTemplate = document.querySelector(templateElementSelector)
      .content.querySelector('.places__place');
  }

  _addEventListeners() {
    const deletePlace = this.placeElement.querySelector('.trash-btn');
    const likeBtn = this.placeElement.querySelector('.places__btn');
    const placeImg = this.placeElement.querySelector('.places__image');

    deletePlace.addEventListener('click', () => this._handleDeleteCard());
    placeImg.addEventListener('click', () => {
      const element = {};
      element.link = this._link;
      element.name = this._name;
      this._handleCardClick(element)
    });
    likeBtn.addEventListener('click', () => {
      this._likesHandler();
    });

  }

  getCardElement = () => {
    this.placeElement = this._placeTemplate.cloneNode(true);
    this._viewTrashBtn();
    this._likesCounter();
    const placeImg = this.placeElement.querySelector('.places__image');
    const placeTitle = this.placeElement.querySelector('.places__title');


    placeImg.alt = this._name;
    placeImg.src = this._link;
    placeTitle.textContent = this._name;

    this._addEventListeners();

    return this.placeElement;
  }
}
