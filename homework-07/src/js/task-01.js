const refs = {
	itemsArr: document.querySelectorAll('.item'),
}

console.log(`В списке ${refs.itemsArr.length} категории.`);

for (const item of refs.itemsArr) {
	console.log(`
	Категория: ${item.querySelector('h2').textContent}
	Количество элементов: ${item.querySelectorAll('li').length}`);
}