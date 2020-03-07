'use strict';

(function () {

  var POSITION_OF_TOGGLE = 20;
  var MAX_VALUE_CHROME = 1;
  var MAX_VALUE_SEPIA = 1;
  var MAX_VALUE_PHOBOS = 3;
  var MIN_VALUE_HEAT = 1;
  var MAX_VALUE_HEAT = 3;

  var editFormElement = document.querySelector('.img-upload__overlay');
  var editedPhotoElement = editFormElement.querySelector('.img-upload__preview img');
  var effectBarElement = editFormElement.querySelector('.img-upload__effect-level');
  var effectToggleElement = editFormElement.querySelector('.effect-level__pin');
  var effectDepthElement = editFormElement.querySelector('.effect-level__depth');
  var effectLevelValue = editFormElement.querySelector('.effect-level__value');
  var scaleValueElement = editFormElement.querySelector('.scale__control--value');

  // настройка фильтров

  var actualFilter;

  var photoElementChangeHandler = function (evt) {
    if (evt.target.matches('input[type="radio"]')) {
      editedPhotoElement.style.filter = '';
      editedPhotoElement.classList.remove('effects__preview--' + actualFilter);
      actualFilter = evt.target.value;
      if (evt.target.matches('input[value="none"]')) {
        effectBarElement.classList.add('hidden');
      } else {
        effectBarElement.classList.remove('hidden');
        editedPhotoElement.classList.add('effects__preview-- ' + actualFilter);
        effectToggleElement.style.left = 100 + '%';
        effectDepthElement.style.width = 100 + '%';
        effectLevelValue.value = 100 + '%';
      }
    }
  };

  var getChromeFilter = function (value) {
    var chromeLvl = value * MAX_VALUE_CHROME / 100;
    return 'grayscale(' + chromeLvl + ')';
  };

  var getSepiaFilter = function (value) {
    var sepiaLvl = value * MAX_VALUE_SEPIA / 100;
    return 'sepia(' + sepiaLvl + ')';
  };

  var getMarvinFilter = function (value) {
    return 'invert(' + value + '%)';
  };

  var getPhobosFilter = function (value) {
    var phobosLvl = value * MAX_VALUE_PHOBOS / 100;
    return 'blur(' + phobosLvl + 'px)';
  };

  var getHeatFilter = function (value) {
    var heatLvl = MIN_VALUE_HEAT + (value * (MAX_VALUE_HEAT - MIN_VALUE_HEAT) / 100);
    return 'brightness(' + heatLvl + ')';
  };

  var FILTERS_MAP = {
    'chrome': getChromeFilter,
    'sepia': getSepiaFilter,
    'marvin': getMarvinFilter,
    'phobos': getPhobosFilter,
    'heat': getHeatFilter,
  };

  var toggleMouseUpHandler = function () {
    effectToggleElement.style.left = POSITION_OF_TOGGLE + '%';
    effectDepthElement.style.width = POSITION_OF_TOGGLE + '%';
    editedPhotoElement.style.filter = FILTERS_MAP[actualFilter(POSITION_OF_TOGGLE)];
    effectLevelValue.value = POSITION_OF_TOGGLE;
  };

  // масштабирование

  var SCALE_STEP = 25;
  var SCALE_VALUE_MIN = 25;
  var SCALE_VALUE_MAX = 100;

  var getScaleValue = function () {
    return parseInt(scaleValueElement.value, 10);
  };

  var getScaleValueInRange = function (value) {
    return Math.min(SCALE_VALUE_MAX, Math.max(SCALE_VALUE_MIN, value));
  };

  var scaleSmallerHandler = function () {
    var actualScaleValue = getScaleValue();
    var newScaleValue = getScaleValueInRange(actualScaleValue - SCALE_STEP);
    scaleValueElement.value = newScaleValue + '%';
    editedPhotoElement.style.transform = 'scale(' + (newScaleValue / 100) + ')';
  };

  var scaleBiggerHandler = function () {
    var actualScaleValue = getScaleValue();
    var newScaleValue = getScaleValueInRange(actualScaleValue + SCALE_STEP);
    scaleValueElement.value = newScaleValue + '%';
    editedPhotoElement.style.transform = 'scale(' + (newScaleValue / 100) + ')';
  };

  var getActualFilter = function () {
    return actualFilter;
  };

  window.editing = {
    photoElementChangeHandler: photoElementChangeHandler,
    toggleMouseUpHandler: toggleMouseUpHandler,
    scaleSmallerHandler: scaleSmallerHandler,
    scaleBiggerHandler: scaleBiggerHandler,
    actualFilter: getActualFilter,
  };

})();

