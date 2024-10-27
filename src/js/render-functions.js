export function renderImages(images) {
  return images.map(image => `
      <a href="${image.largeImageURL}" class="gallery-item">
          <img src="${image.webformatURL}" alt="${image.tags}">
          <div class="info">
              <p>Likes: ${image.likes}</p>
              <p>Views: ${image.views}</p>
              <p>Comments: ${image.comments}</p>
              <p>Downloads: ${image.downloads}</p>
          </div>
      </a>
  `).join('');
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}