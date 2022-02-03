const refs = {
	inputEl: document.querySelector('#name-input'),
	outputEl: document.querySelector('#name-output'),
}

const onInputWrite = (event) => {
	if (event.currentTarget.value==='') {
		refs.outputEl.textContent = 'Незнакомец';
	} else {
		refs.outputEl.textContent = event.currentTarget.value;
	}
	return refs.outputEl;
}

refs.inputEl.addEventListener('input', onInputWrite)