import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderEl = document.getElementById('loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
<li>
<a href="${largeImageURL}">
<img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
</a>
<div class="card-info">
<div><b>Likes</b><span>${likes}</span></div>
<div><b>Views</b><span>${views}</span></div>
<div><b>Comments</b><span>${comments}</span></div>
<div><b>Downloads</b><span>${downloads}</span></div>
</div>
</li>`;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
