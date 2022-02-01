const refs = {
	counterValue: document.querySelector('#value'),
	decrementBtn: document.querySelector('button[data-action="decrement"]'),
	incrementBtn: document.querySelector('button[data-action="increment"]'),
}


const onDecrementBtnClick = () => {
	return refs.counterValue.textContent-=1;
}
const onIncrementBtnClick = () => {
	let num = Number(refs.counterValue.textContent);
	num += 1;
	return refs.counterValue.textContent = num.toString();
}


refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);