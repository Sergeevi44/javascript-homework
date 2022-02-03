const refs = {
	inputEl: document.querySelector('#font-size-control'),
	textEl: document.querySelector('#text'),
}

const onInputRangeChange = event => {
	console.log(refs.inputEl.value);
	refs.textEl.setAttribute('style', `font-size:${refs.inputEl.value}px`);

}

refs.inputEl.addEventListener('input', onInputRangeChange);
