import * as basicLightbox from 'basiclightbox';

function onLargeImageClick(e) {
  basicLightbox.create(`<img src="${e.target.alt}">`).show(e);
}

export default onLargeImageClick;
