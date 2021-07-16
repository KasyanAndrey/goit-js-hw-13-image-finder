import API from './apiService.js';
import refs from './get-refs';

refs.formEl.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const searcQuery = evt.target.value;

  if (searcQuery) {
    API.fetchPhoto(searcQuery)
      .then(photo => {
        if (photo.length === 1) {
          console.log(searcQuery);

          //   renderCountryCard(country);
          //   onSuccessFullRequest();
        }
        return;
      })
      .catch(err => {
        onFetchError();
      });
  }
}
