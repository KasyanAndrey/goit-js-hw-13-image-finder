// const options = {
//   headers: {
//     Autorization: '20167067-fa9a23327fba47dd7ecb29229',
//   },
// };

const url =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=yellow+flower&page=1&per_page=12&key=20167067-fa9a23327fba47dd7ecb29229';

fetch(url)
  .then(response => response.json())
  .then(images);
