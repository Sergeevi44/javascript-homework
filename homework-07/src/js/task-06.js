const refs = {
	inputEl: document.querySelector('#validation-input'),
}

const onInputBlur = event => {
	refs.inputEl.classList.remove('valid','invalid')
	if (refs.inputEl.value.length.toString() !== refs.inputEl.getAttribute('data-length')) {
		return refs.inputEl.classList.add('invalid');
	} else {
		return refs.inputEl.classList.add('valid');
	}
}

refs.inputEl.addEventListener('blur', onInputBlur)