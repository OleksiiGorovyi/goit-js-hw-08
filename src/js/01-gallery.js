// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items
        .map(
            item =>
                 `<li><a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
          </li></a>`
    )
    .join('');
}

gallaryImages.style.listStyle = 'none';

const imgMarkup = createGalleryMarkup(galleryItems);

galleryImages.innerHTML = imgMarkup;

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 300 });