'use strict';

(function () {
  var MIN_HASH_LENGTH = 2;
  var MAX_HASH_LENGTH = 20;
  var MAX_HASH_NUMBER = 5;

  var editorForm = document.querySelector('.img-upload__overlay');
  var hashInputDevice = editorForm.querySelector('.text__hashtags');

  var getIdentificationOfHash = function (array) {
    var suspect = {};

    for (var i = 0; i < array.length; i++) {
      var actual = array[i];
      if (suspect[actual]) {
        return false;
      }
      suspect[actual] = true;
    }
    return true;
  };


  var getSomeSymbol = function (word) {
    return word.match(/^#[a-zA-Z0-9а-яА-Я]+$/);
  };


  var getInvalidMessage = function (array) {
    var message = '';

    if (array.length > MAX_HASH_NUMBER) {
      message = 'Должно быть максимум ' + MAX_HASH_NUMBER + ' хэш-тегов';
      return message;
    }
    if (!getIdentificationOfHash(array)) {
      message = 'хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;';
    }

    for (var i = 0; i < array.length; i++) {
      if (array[i].length === 1 && array[i] === '#') {
        message = 'хеш-тег не может состоять только из одной решётки;';
        return message;
      } else if (!getSomeSymbol(array[i])) {
        message = 'хэш-тег ' + array[i] + ' должен начинаться с символа решетки и состоять только из букв и цифр';
        return message;
      } else if (array[i].length < MIN_HASH_LENGTH) {
        message = 'хэш-тег ' + array[i] + ' должен состоять минимум из ' + MIN_HASH_LENGTH + ' символов';
        return message;
      } else if (array[i].length > MAX_HASH_LENGTH) {
        message = 'Хэш-тег должен состоять максимум из ' + MAX_HASH_LENGTH + ' символов, а еще они необязательные и скучные';
        return message;
      }
    }
    return message;
  };

  var hashInputDeviceHandler = function (evt) {
    var hashtags = hashInputDevice.value.toLoweCase().split(' ');
    evt.target.setCustomValidity(getInvalidMessage(hashtags));
  };

  window.validation = {
    hashInputDeviceHandler: hashInputDeviceHandler
  };
})();

