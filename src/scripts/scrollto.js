const scrollto = function(classname) {
  [...document.querySelectorAll(classname)].forEach(ele => ele.addEventListener('click', scrollToLink));
  
  function scrollToLink(e) {
    e.preventDefault();
    const link = e.target.getAttribute('href');
    const linkPosition = document.querySelector(link).offsetTop;

    window.scroll({
      top: linkPosition, 
      behavior: 'smooth' 
    });
  }
};

module.exports = scrollto;