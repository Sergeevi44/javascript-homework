const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
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
const onRightArrowPress = e => {
	if (!refs.lightBoxEl.classList.contains('is-open')) {
		return
	}
	console.log(e.target.href);
	for (let i = 0; i < galleryItems.length; i += 1){
		if (e.target.href.toString() === galleryItems[i].original.toString()) {
			refs.imageEl.alt = galleryItems[i + 1].description
			refs.imageEl.src = galleryItems[i + 1].original
			return
		}
	}
	// console.log(e.code='ArrowRight');
}

refs.galleryEl.insertAdjacentHTML('beforeend', renderMarkupGalleryItems(galleryItems))
refs.galleryEl.addEventListener('click', onPreviewClick)
refs.closeBtnEl.addEventListener('click', onCloseBtnClick)
refs.lightBoxEl.addEventListener('click', onOverlayClick)
window.addEventListener('keydown', onEscPress)
window.addEventListener('keydown', onRightArrowPress)