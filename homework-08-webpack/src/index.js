import galleryItems from './js/gallery';

const refs = {
	galleryEl: document.querySelector('.js-gallery'),
	lightBoxEl: document.querySelector('.js-lightbox'),
	overlayEl: document.querySelector.toString('.lightbox__overlay'),
	lightBoxContentEl: document.querySelector('.lightbox__content'),
	imageEl: document.querySelector('.lightbox__image'),
	closeBtnEl:document.querySelector('.lightbox__button'),
}

const renderMarkupGalleryItems = arr => {
	return (arr.map(({ preview, original, description }) => 
		`<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join(''))
}
const onPreviewClick = e => {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') {
		return;
	}
	refs.lightBoxEl.classList.add('is-open');
	refs.imageEl.alt = `${e.target.alt}`;
	refs.imageEl.src = `${e.target.dataset.source}`;
}
const onCloseBtnClick = e => {
	refs.imageEl.src = ""
	refs.lightBoxEl.classList.remove('is-open');
}
const onOverlayClick = e => {
	if (!refs.lightBoxEl.classList.contains('is-open')) {
		return
	}
	if (e.target.classList.contains('lightbox__overlay')) {
		refs.imageEl.src = ""
	refs.lightBoxEl.classList.remove('is-open');
	}
}
const onEscPress = e => {
	if (!refs.lightBoxEl.classList.contains('is-open')) {
		return
	}
	if (e.code==='Escape') {
		refs.imageEl.src = ""
	refs.lightBoxEl.classList.remove('is-open');
	}
}
const onLeftArrowPress = e => {
	if (!refs.lightBoxEl.classList.contains('is-open') || e.code !='ArrowLeft') {
		return
	}
	for (let i = 0; i < galleryItems.length; i += 1){
		if (e.target.href === galleryItems[i].original) {
			refs.imageEl.alt = galleryItems[i - 1].description
			refs.imageEl.src = galleryItems[i - 1].original
			return e.target.href = galleryItems[i - 1].original;
		}
	}
	// console.log(e.code='ArrowRight');
}
const onRightArrowPress = e => {
	if (!refs.lightBoxEl.classList.contains('is-open') || e.code !='ArrowRight') {
		return
	}
	for (let i = 0; i < galleryItems.length; i += 1){
		if (e.target.href === galleryItems[i].original) {
			refs.imageEl.alt = galleryItems[i + 1].description
			refs.imageEl.src = galleryItems[i + 1].original
			return e.target.href = galleryItems[i + 1].original;
		}
	}
	// console.log(e.code='ArrowRight');
}

refs.galleryEl.insertAdjacentHTML('beforeend', renderMarkupGalleryItems(galleryItems))
refs.galleryEl.addEventListener('click', onPreviewClick)
refs.closeBtnEl.addEventListener('click', onCloseBtnClick)
refs.lightBoxEl.addEventListener('click', onOverlayClick)
window.addEventListener('keydown', onEscPress)
window.addEventListener('keydown', onLeftArrowPress)
window.addEventListener('keydown', onRightArrowPress)