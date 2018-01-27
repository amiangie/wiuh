'use strict';

var particles = function (ele) {
  particlesJS.load(ele, 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
};

module.exports = particles;
