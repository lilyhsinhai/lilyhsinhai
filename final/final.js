
const clothes1 = document.querySelectorAll('.clothes-image');
const target = document.querySelector('#target')


clothes1.forEach((clothesImage) => {
	clothesImage.addEventListener('dragstart', (e) => {
		e.dataTransfer.setDragImage(clothesImage, clothesImage.width/2, clothesImage.height/2);
		e.dataTransfer.setData("src-id", clothesImage.id);
		e.target.style.opacity = 0.3;
	});

	clothesImage.addEventListener('dragend', (e) => {
		e.target.style.opacity = 1;
	})

})


target.addEventListener('dragover', (e) => {
	e.preventDefault();
})

target.addEventListener('dragenter', (e) => {
	e.target.style.opacity = 0.3;
})

target.addEventListener('dragleave', (e) => {
	e.target.style.opacity = 1;
})

target.addEventListener('drop', (e) => {
	e.preventDefault();
	const srcId = e.dataTransfer.getData("src-id");
	document.querySelector('#' + srcId).classList.add('worn');
	e.target.style.opacity = 1;
})

target.addEventListener('dblclick', (e) => {
	e.preventDefault();
	clothes1.forEach((clothesImage) => {
		clothesImage.classList.remove('worn');	
	})
})