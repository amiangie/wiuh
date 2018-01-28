'use strict';

const carousel = function (ele) {
  const carouselEle = document.querySelector(ele);
  const carousel = new Wallop(carouselEle);
  const carouselItems = carousel.allItemsArray;
  const dotsHolder = document.querySelector('.js-dots');
  const slideTitle = document.querySelector('.js-title');
  
  carouselItems.forEach((item, i) => {
    const dotTemplate = `
      <button class="c-carousel__dot js-dot">
        <span class="u-visuallyhidden">Go to item ${i + 1}</span>
      </button>
    `;
    dotsHolder.insertAdjacentHTML('beforeend', dotTemplate);
  });  
  
  const dots = [...carouselEle.querySelectorAll('.js-dot')];
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function(){ carousel.goTo(i) });
  });
  
  carousel.on('change', function(event) {
    dots.forEach(dot => {
      dot.classList.remove('-active');
    });
    dots[event.detail.currentItemIndex].classList.add('-active');
    
    const title = document.querySelector('.js-item.Wallop-item--current').getAttribute('data-title');
    
    slideTitle.innerHTML = title;
  });
  
};

module.exports = carousel;
