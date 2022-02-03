const refs = {
	inputEl: document.querySelector('#controls input'),
	renderBtnEl: document.querySelector('[data-action="render"]'),
	clearBtnEl: document.querySelector('[data-action="destroy"]'),
	resultBoxesEl: document.querySelector('#boxes'),
}

const createBoxes = amount => {
	amount = refs.inputEl.value;
	refs.resultBoxesEl.setAttribute('style', 'display:flex');
	for (let i = 0; i < amount; i+=1) {
		refs.resultBoxesEl.insertAdjacentHTML('beforeend', `<div class="box" style="background-color:teal" width=${30 + i * 10} height = ${30 + i * 10}></div>`);

	}
}
const destroyBoxes=()=> {
	
}

refs.renderBtnEl.addEventListener('click', createBoxes);