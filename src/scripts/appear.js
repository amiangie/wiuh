appear({
  init: function init(){
    console.log('dom is ready');
  },
  elements: function elements(){
    // work with all elements with the class "track"
    return document.getElementsByClassName('js-appear');
  },
  appear: function appear(el){
    const elements = el.querySelectorAll('.js-animate');
    
    for(let i = 0; i < elements.length; i++) {
      window.setTimeout(function() {
        elements[i].classList.add('appear');
      }, 300 * i);
    }
  },
  bounds: 200,
  reappear: false
});