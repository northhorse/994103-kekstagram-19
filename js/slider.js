'use strict';

(function () {
  var effectSlider = document.querySelector('.img-upload__effect-level');
  var effectBarElement = effectSlider.querySelector('.img-upload__effect-level');
  var effectPinElement = effectSlider.querySelector('.effect-level__pin');
  var effectDepthElement = effectSlider.querySelector('.effect-level__depth');

  var uploadPreviewElement = document.querySelector('.img-upload__preview img');
  var filtersElement = document.querySelectorAll('.effects__radio');
  var activeFilter = '';
  var effectValue = 0;

  function onMouseDown(evt) {
    evt.preventDefault();

    for (var i = 0; i < filtersElement.length; i++) {
      if (filtersElement[i].checked === true) {
        activeFilter = filtersElement[i].nodeValue;
      }
    }

    var startCordsX = evt.clientX;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      var moveCordsX = startCordsX - moveEvt.clientX;

      startCordsX = moveEvt.clientX;


      if (startCordsX > effectBarElement.getBoundingClientRect().left && startCordsX < effectBarElement.getBoundingClientRect().left + effectBarElement.offsetWidth) {
        effectPinElement.style.left = (effectPinElement.offsetLeft - moveCordsX) + 'px';
        effectDepthElement.style.width = effectPinElement.offsetLeft + 'px';
      }

      effectValue = effectPinElement.offsetLeft / effectBarElement.offsetWidth;

      switch (activeFilter) {
        case 'chrome':
          uploadPreviewElement.style.filter = 'grayscale(' + effectValue + ')';
          break;

        case 'sepia':
          uploadPreviewElement.style.filter = 'sepia(' + effectValue + ')';
          break;

        case 'marvin':
          uploadPreviewElement.style.filter = 'invert(' + effectValue * 100 + '%)';
          break;

        case 'phobos':
          uploadPreviewElement.style.filter = 'blur(' + effectValue * 3 + 'px)';
          break;

        case 'heat':
          uploadPreviewElement.style.filter = 'brightness(' + (effectValue * 2 + 1) + ')';
          break;
      }

      function onMouseUp(upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }

  effectPinElement.addEventListener('mousedown', onMouseDown);

})();

