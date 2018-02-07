const appear = function(section, ele) {
  
  window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) >= document.querySelector(section).offsetHeight) {
      const elements = document.querySelectorAll(ele);
      
      for(let i = 0; i < elements.length; i++)
        window.setTimeout(function() {
          elements[i].classList.add('appear');
        }, 250 * i);
    }
  };
};

module.exports = appear;