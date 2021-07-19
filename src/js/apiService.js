export default class ImagesApiService {
  constructor() {
    this.searcQuery = '';
    this.page = 1;
  }

  fetchImages() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searcQuery}&page=${this.page}&per_page=12&key=20167067-fa9a23327fba47dd7ecb29229`,
    )
      .then(response => response.json())
      .then(data => {
        this.incrementPage();

        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searcQuery;
  }

  set query(newQuery) {
    this.searcQuery = newQuery;
  }
}
