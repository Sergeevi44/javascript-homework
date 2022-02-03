const refs = {
	inputEl: document.querySelector('#controls input'),
	renderBtnEl: document.querySelector('[data-action="render"]'),
	clearBtnEl: document.querySelector('[data-action="destroy"]'),
	resultBoxesEl: document.querySelector('#boxes'),
}
const createBoxes = amount => {
	amount = refs.inputEl.value;
	refs.resultBoxesEl.setAttribute('style', 'display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap');
	for (let i = 0; i < amount; i+=1) {
		refs.resultBoxesEl.insertAdjacentHTML('beforeend', `<div class="box" style="background-color:rgb(${(Math.round(Math.random()*255)).toString()},${(Math.round(Math.random()*255)).toString()},${(Math.round(Math.random()*255)).toString()}); width:${30 + i * 10}px; height:${30 + i * 10}px"></div>`);
	}
	refs.renderBtnEl.setAttribute('disabled', 'true');
}
const destroyBoxes = () => {
	refs.resultBoxesEl.innerHTML = '';
	refs.inputEl.value = 0;
	refs.renderBtnEl.removeAttribute('disabled');
}

refs.renderBtnEl.addEventListener('click', createBoxes);
refs.clearBtnEl.addEventListener('click', destroyBoxes);