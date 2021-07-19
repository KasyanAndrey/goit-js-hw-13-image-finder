import refs from './get-refs';
import ImagesApiService from './apiService.js';
import photoCardsTpl from '../templates/photo-card.hbs';

const imagesApiService = new ImagesApiService();

refs.formEl.addEventListener('submit', onSearch);
refs.loadButtonEl.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value;
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(hits => {
    clearGallery();
    appendPhotoCardsMarcup(hits);
  });
}

function onLoadMore() {
  imagesApiService.fetchImages().then(appendPhotoCardsMarcup);
}

function appendPhotoCardsMarcup(hits) {
  refs.galleryEl.insertAdjacentHTML('beforeend', photoCardsTpl(hits));
}

function clearGallery() {
  refs.galleryEl.innerHTML = '';
}
