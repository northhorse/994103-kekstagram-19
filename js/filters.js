'use strict';

(function () {
  // Переменные для работы с картинкой в форме

  var editingForm = document.querySelector('.img-upload');
  var editingFormFilters = editingForm.querySelector('.img-upload__preview img');
  var pictureSizeValue = editingForm.querySelector('.scale__control--value');
  var filters = editingForm.querySelector('.effects');
  var toggleSlider = editingForm.querySelector('.effect-level__pin');
  var effectsLevel = editingForm.querySelector('.effect-level');
  var sliderLine = editingForm.querySelector('.effect-level__line');
  var sliderLineFill = editingForm.querySelector('.effect-level__depth');

  var currentFilterValue = 1;
  var currentFilter = 0;

  var settingsEffectsMap = {
    chrome: {
      NAME: 'chrome',
      MIN: 0,
      MAX: 1,
    },

    sepia: {
      NAME: 'sepia',
      MIN: 0,
      MAX: 1,
    },

    marvin: {
      NAME: 'marvin',
      MIN: 0,
      MAX: 100,
    },

    phobos: {
      NAME: 'phobos',
      MIN: 0,
      MAX: 3,
    },

    heat: {
      NAME: 'heat',
      MIN: 1,
      MAX: 3,
    },
  }

  function getCurrentFilterValue(filter, filerValue) {
    return(filter.MAX - filter.MIN) * filterValue
  }

  function checkActiveFilter(filterName, filterValue) {
    switch (filterName) {
      case settingsEffectsMap.chrome.NAME:
        editingFormFilters.style.filter = 'grayscale(' + getCurrentFilterValue(settingsEffectsMap.chrome, filterValue) + ')';
        break;

      case settingsEffectsMap.sepia.NAME:
        editingFormFilters.style.filter = 'sepia(' + getCurrentFilterValue(settingsEffectsMap.sepia, filterValue) + ')';
        break;

      case settingsEffectsMap.marvin.NAME:
        editingFormFilters.style.filter = 'invert(' + getCurrentFilterValue(settingsEffectsMap.marvin, filterValue) + '%)';
        break;

    }
  }


