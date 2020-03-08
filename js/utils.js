'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var getRndRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRndElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.utils = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    getRndElement: getRndElement,
    getRndRange: getRndRange,
  };
})();

