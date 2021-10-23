import { api } from '../components/Api';
import Card from '../components/Card';
import { popupImg } from '../pages/index';
import { renderInitialCards, confirmModal, userId } from '../pages/index';

export function createCard(card) {
  const likes = card.likes;
  const cardOwnerId = card.owner._id;

  const newCard = new Card(card,
    '#place-template',
    () => {
      popupImg.open(card);
    },
    () => {
      confirmModal.open();
      confirmModal.setAction(() => {
        api.deleteCard(card._id).
          then(() => {
            newCard._placeElement.remove();
            newCard._placeElement = null;
          })
      })
    },
    () => {
      if (cardOwnerId !== userId) {
        newCard._placeElement.querySelector('.trash-btn').style.display = 'none'
      }
    },
    () => {
      newCard._likes = newCard._placeElement.querySelector('.card__likes-count')
      newCard._likes.textContent = likes.length;

      likes.forEach((like) => {
        if (like._id === userId) {
          const likeBtn = newCard._placeElement.querySelector('.places__btn');
          likeBtn.classList.add('places__btn_active');
        }
      })
    },
    () => {
      const likeBtn = newCard._placeElement.querySelector('.places__btn');
      if (likeBtn.classList.contains('places__btn_active')) {
        api.deleteLike(card._id)
          .then(res => {
            newCard._likes.textContent = res.likes.length;
            likeBtn.classList.toggle('places__btn_active');
          })
      } else {
        api.addLike(card._id)
          .then(res => {
            newCard._likes.textContent = res.likes.length;
            likeBtn.classList.toggle('places__btn_active');
          })
      }
    }
  );
  return newCard.getCardElement();
}

export function handleNewPlaceFormSubmit(data) {
  const saveBtn = document.querySelector('.popup__save-btn')
  api.createCard(data)
    .then(res => {
      renderInitialCards._items = [res];
      renderInitialCards.renderItems();
      this.close();
      saveBtn.textContent = 'Save'
    })
  saveBtn.textContent = 'Save...'
}
