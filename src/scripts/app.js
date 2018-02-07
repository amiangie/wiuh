/*
  Project: Wiuh
  Author: angie
 */

const particles = require('./particles.js')
const carousel = require('./carousel.js')
const appear = require('./appear.js')

particles('particles-js');
appear('.js-services', '.js-card');
carousel('.Wallop', true, true);
carousel('.Reviews ', true, false);