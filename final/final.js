
const clothes1 = document.querySelectorAll('.clothes-image');
const reset = document.querySelector('#reset');


clothes1.forEach((clothesImage) => {
	clothesImage.onmousedown = function(event) {
    clothesImage.classList.remove("resetting");

    clothesImage.style.zIndex = 10;

    let shiftX = event.clientX - clothesImage.getBoundingClientRect().left;
    let shiftY = event.clientY - clothesImage.getBoundingClientRect().top;

    // clothesImage.style.position = 'absolute';
    // clothesImage.style.zIndex = 1000;
    // document.body.append(clothesImage);

    moveAt(event.pageX, event.pageY);

    // moves the clothes at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      clothesImage.style.left = `${pageX - shiftX}px`;
      clothesImage.style.top = `${pageY - shiftY}px`;
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    // move the clothes on mousemove
    document.addEventListener('mousemove', onMouseMove);
    function cleanup() {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('pointerleave', onPointerLeave);
      clothesImage.onmouseup = null;
      clothesImage.style.zIndex = "";
    }
    function onPointerLeave(event) {
      cleanup();
    }

    // drop the clothes, remove unneeded handlers
    clothesImage.onmouseup = function() {
      cleanup();
    };

    document.body.addEventListener("pointerleave", onPointerLeave)

  };

  clothesImage.ondragstart = function() {
    return false;
  };

});

reset.onclick = function(event) {
  clothes1.forEach((clothesImage) => {
    clothesImage.classList.add("resetting");
    clothesImage.style = "";
  });
}