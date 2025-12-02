import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.getElementById('gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loaderEl = document.getElementById('loader');

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <div class="card">
          <img class="card-image" src="${img.webformatURL}" alt="${escapeHtml(
        img.tags
      )}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${img.likes}</p>
            <p class="info-item"><b>Views:</b> ${img.views}</p>
            <p class="info-item"><b>Comments:</b> ${img.comments}</p>
            <p class="info-item"><b>Downloads:</b> ${img.downloads}</p>
          </div>
        </div>
      </a>
    </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
  lightbox.refresh();
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('is-active');
  loaderEl.setAttribute('aria-hidden', 'false');
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove('is-active');
  loaderEl.setAttribute('aria-hidden', 'true');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"'`=\/]/g, s => {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;',
    };
    return entityMap[s];
  });
}
