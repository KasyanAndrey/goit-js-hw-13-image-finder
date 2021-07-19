import refs from './get-refs';
import ImagesApiService from './apiService.js';
import photoCardsTpl from '../templates/photo-card.hbs';

// import * as basicLightbox from 'basiclightbox';

const imagesApiService = new ImagesApiService();

refs.formEl.addEventListener('submit', onSearch);
refs.loadButtonEl.addEventListener('click', onLoadMore);
refs.loadButtonEl.classList.add('is-hidden');

function onSearch(e) {
  e.preventDefault();

  imagesApiService.query = e.currentTarget.elements.query.value;
  if (imagesApiService.query === '') {
    return alert('Enter your request!');
  }
  imagesApiService.resetPage();
  imagesApiService
    .fetchImages()
    .then(hits => {
      clearGallery();
      appendPhotoCardsMarcup(hits);
      refs.loadButtonEl.classList.remove('is-hidden');
      if (hits.length < 12) {
        refs.loadButtonEl.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log('error');
    });
}

function onLoadMore() {
  imagesApiService
    .fetchImages()
    .then(hits => {
      appendPhotoCardsMarcup(hits);
      const element = refs.loadButtonEl;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    })
    .catch(err => {
      console.log('error');
    });
}

function appendPhotoCardsMarcup(hits) {
  refs.galleryEl.insertAdjacentHTML('beforeend', photoCardsTpl(hits));
}

function clearGallery() {
  refs.galleryEl.innerHTML = '';
}

// const onLargeImageClick = e => {
//   basicLightbox.create(`<img src="${e.target.alt}">`).show(e);
// };
