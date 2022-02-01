const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const refs = {
	ingredientsEl: document.querySelector('#ingredients'),
}

const items = ingredients.map(item => {
	const itemEl = document.createElement('li');
	itemEl.textContent = item;
	console.log(itemEl);
	return itemEl;
})

refs.ingredientsEl.append(...items);