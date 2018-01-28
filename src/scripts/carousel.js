'use strict';

const carousel = function (ele) {
  const carouselEle = document.querySelector(ele);
  const carousel = new Wallop(carouselEle);
  const dots = [...carouselEle.querySelectorAll('.js-dot')];
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function(){ carousel.goTo(i) });
  });
  
  carousel.on('change', function(event) {
    dots.forEach(dot => {
      dot.classList.remove('-active');
    });
    dots[event.detail.currentItemIndex].classList.add('-active');
  });
  
  console.log(carousel)
};

module.exports = carousel;
