(()=>{"use strict";const e=galleryItems=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t={galleryEl:document.querySelector(".js-gallery"),lightBoxEl:document.querySelector(".js-lightbox"),overlayEl:document.querySelector.toString(".lightbox__overlay"),lightBoxContentEl:document.querySelector(".lightbox__content"),imageEl:document.querySelector(".lightbox__image"),closeBtnEl:document.querySelector(".lightbox__button")};t.galleryEl.insertAdjacentHTML("beforeend",e.map((({preview:e,original:t,description:i})=>`<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${t}"\n  >\n    <img\n      class="gallery__image"\n      src="${e}"\n      data-source="${t}"\n      alt="${i}"\n    />\n  </a>\n</li>`)).join("")),t.galleryEl.addEventListener("click",(e=>{e.preventDefault(),"IMG"===e.target.nodeName&&(t.lightBoxEl.classList.add("is-open"),t.imageEl.alt=`${e.target.alt}`,t.imageEl.src=`${e.target.dataset.source}`)})),t.closeBtnEl.addEventListener("click",(e=>{t.imageEl.src="",t.lightBoxEl.classList.remove("is-open")})),t.lightBoxEl.addEventListener("click",(e=>{t.lightBoxEl.classList.contains("is-open")&&e.target.classList.contains("lightbox__overlay")&&(t.imageEl.src="",t.lightBoxEl.classList.remove("is-open"))})),window.addEventListener("keydown",(e=>{t.lightBoxEl.classList.contains("is-open")&&"Escape"===e.code&&(t.imageEl.src="",t.lightBoxEl.classList.remove("is-open"))})),window.addEventListener("keydown",(i=>{if(t.lightBoxEl.classList.contains("is-open")&&"ArrowLeft"==i.code)for(let o=0;o<e.length;o+=1)if(i.target.href===e[o].original)return t.imageEl.alt=e[o-1].description,t.imageEl.src=e[o-1].original,i.target.href=e[o-1].original})),window.addEventListener("keydown",(i=>{if(t.lightBoxEl.classList.contains("is-open")&&"ArrowRight"==i.code)for(let o=0;o<e.length;o+=1)if(i.target.href===e[o].original)return t.imageEl.alt=e[o+1].description,t.imageEl.src=e[o+1].original,i.target.href=e[o+1].original}))})();