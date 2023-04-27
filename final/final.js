
const clothes1 = document.querySelectorAll('.clothes-image');
const target = document.querySelector('#target')


clothes1.forEach((clothesImage) => {
	clothesImage.onmousedown = function(event) {

  let shiftX = event.clientX - clothesImage.getBoundingClientRect().left;
  let shiftY = event.clientY - clothesImage.getBoundingClientRect().top;

  clothesImage.style.position = 'absolute';
  clothesImage.style.zIndex = 1000;
  document.body.append(clothesImage);

  moveAt(event.pageX, event.pageY);

  // moves the clothes at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    clothesImage.style.left = pageX - shiftX + 'px';
    clothesImage.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the clothes on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the clothes, remove unneeded handlers
  clothesImage.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    clothesImage.onmouseup = null;
  };

};

clothesImage.ondragstart = function() {
  return false;
};

})
