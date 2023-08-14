// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) =>
        `<li class = "gallery_list">
  <a class = "gallery_link" href = "${original}">
    <img class = "gallery_img" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
</li>`,)
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
