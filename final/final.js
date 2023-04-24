const greendress1A = document.querySelector('#greendress1A');
const greendress1B = document.querySelector('#greendress1B');
const target = document.querySelector('.target')

greendress1A.addEventListener('dragstart', (e) => {
	e.dataTransfer.setDragImage(greendress1B, 150,300);
	e.target.style.opacity = 0.3;
})

greendress1A.addEventListener('dragend', (e) => {
	e.target.style.opacity = 1;
})

target.addEventListener('dragover', (e) => {
	e.preventDefault();
})

target.addEventListener('dragenter', (e) => {
	e.target.style.background = '#eee';
})

target.addEventListener('dragleave', (e) => {
	e.target.style.background = '';
})

target.addEventListener('drop', (e) => {
	e.preventDefault();
	const greendress1AID = e.dataTransfer.getData('text/plain');
	e.target.appendChild(document.getElementById(greendress1AID));
	e.target.style.background = '';
})


