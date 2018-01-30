/*
  Project: Wiuh
  Author: angie
 */

const particles = require('./particles.js')
const carousel = require('./carousel.js')
const scrollto = require('./scrollto.js')

particles('particles-js');
scrollto('.js-scrollto');
carousel('.Wallop', true, true);
carousel('.Reviews ', true, false);