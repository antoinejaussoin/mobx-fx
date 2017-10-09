// React 16 will give a warning if this is not polyfilled, during the tests
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};