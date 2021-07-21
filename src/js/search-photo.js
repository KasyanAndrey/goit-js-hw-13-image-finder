import ImagesApiService from './apiService.js';

import refs from './get-refs';
import renderPhotoCard from '../js/photo-card.js';
import {
  onImageTitle,
  onSpecificEnoughAlert,
  onSuccessFullRequest,
  onFetchError,
} from './notifications.js';
import onLargeImageClick from './basicLightbox.js';

refs.formEl.addEventListener('submit', onSearch);
refs.loadButtonEl.addEventListener('click', onLoadMore);
refs.galleryEl.addEventListener('click', onLargeImageClick);
refs.loadButtonEl.classList.add('is-hidden');

const imagesApiService = new ImagesApiService();

function onSearch(e) {
  e.preventDefault();
  clearGallery();

  imagesApiService.query = e.currentTarget.elements.query.value.trim();
  imagesApiService.resetPage();

  if (!imagesApiService.query) {
    onImageTitle();
    return;
  }

  imagesApiService
    .fetchImages()
    .then(hits => {
      console.log(hits);

      if (hits.length >= 12) {
        renderPhotoCard(hits);
        refs.loadButtonEl.classList.remove('is-hidden');
        onSuccessFullRequest();
      }

      if (hits.length === 0) {
        refs.loadButtonEl.classList.add('is-hidden');
        onSpecificEnoughAlert();
      }
    })
    .catch(err => {
      onFetchError();
    });
}

function onLoadMore() {
  imagesApiService
    .fetchImages()
    .then(hits => {
      renderPhotoCard(hits);

      if (hits.length < 12) {
        renderPhotoCard(hits);
        refs.loadButtonEl.classList.add('is-hidden');
      }

      const element = refs.loadButtonEl;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    })
    .catch(err => {
      onFetchError();
    });
}

function clearGallery() {
  refs.galleryEl.innerHTML = '';
}
