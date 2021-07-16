// const options = {
//   headers: {
//     Autorization: '20167067-fa9a23327fba47dd7ecb29229',
//   },
// };

// const url =
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=yellow+flower&page=1&per_page=12&key=20167067-fa9a23327fba47dd7ecb29229';

// return fetch(url)
//   .then(response => response.json())
//   .then(images);

const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '20167067-fa9a23327fba47dd7ecb29229';

// const url =
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`${searcQuery}`&page=1&per_page=12&key=20167067-fa9a23327fba47dd7ecb29229';

function fetchPhoto(searcQuery) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searcQuery}&page=1&per_page=12&key=20167067-fa9a23327fba47dd7ecb29229`,
  ).then(response => {
    return response.json();
  });
}

export default { fetchPhoto };
