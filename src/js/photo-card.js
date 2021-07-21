import refs from './get-refs';
import photoCardTpl from '../templates/photo-card.hbs';

function renderPhotoCard(hits) {
  refs.galleryEl.insertAdjacentHTML('beforeend', photoCardTpl(hits));
}

export default renderPhotoCard;
