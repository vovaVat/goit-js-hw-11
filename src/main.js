import makeHTTPResponse from "./js/pixabay-api";
import { renderImages, clearGallery } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form= document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#loader");
const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener("submit", event => {
  event.preventDefault();
  const query = document.querySelector('.input').value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term' });
    return;
  }

  clearGallery();
  loader.classList.remove("hidden");

  makeHTTPResponse(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({ message: "Sorry, there are no images matching your search query. Please try again!" });
        return;
      }

      gallery.innerHTML = renderImages(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({ message: 'Error fetching images. Please try again later.' });
    })
    .finally(() => {
      loader.classList.add("hidden");
    });
});