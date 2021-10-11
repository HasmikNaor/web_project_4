import Card from '../components/Card';
import { popupImg } from '../pages/index';

import { renderInitialCards } from '../pages/index'
export function createCard(element) {
  const newCard = new Card(element, '#place-template', (element) => {
    popupImg.open(element);
  });
  return newCard.getCardElement();
}

export function handleNewPlaceFormSubmit(values) {
  renderInitialCards._itmes = [values];
  console.log(renderInitialCards._itmes)
  renderInitialCards.renderItmes()
}
