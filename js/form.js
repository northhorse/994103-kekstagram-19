'use strict';

(function () {
  var uploadNewElement = document.querySelector('.img-upload__input');
  var editFormElement = document.querySelector('.img-upload__overlay');
  var editFormCloseElement = editFormElement.querySelector('.img-upload__cancel');
  var scaleSmallerElement = editFormElement.querySelector('.scale__control--smaller');
  var scaleBiggerElement = editFormElement.querySelector('.scale__control--bigger');
  var effectBarElement = editFormElement.querySelector('.img-upload__effect-level');
  var effectToggleElement = editFormElement.querySelector('.effect-level__pin');
  var editedPhotoElement = editFormElement.querySelector('.scale__control--value');
  var scaleValueElement = editFormElement.querySelector('.scale__control--value');
  var commentInputElement = editFormElement.querySelector('.text__description');
  var hashtagInputElement = editFormElement.querySelector('.text__hashtags');

  var editFormEscPressHandler = function (evt) {
    if (evt.key === window.utils.ESC_KEY && commentInputElement !== document.activeElement && hashtagInputElement !== document.activeElement) {
      closeEditorForm();
    }
  };

  var openEditorForm = function () {
    editFormElement.classList.remove('hidden');
    document.addEventListener('keydown', editFormEscPressHandler);
    document.querySelector('body').classList.add('modal-open');
    editFormElement.addEventListener('change', window.editing.photoElementChangeHandler);
    effectToggleElement.addEventListener('mouseup', window.editing.toggleMouseUpHandler);
    effectBarElement.classList.add('hidden');
    scaleSmallerElement.addEventListener('click', window.editing.scaleSmallerHandler);
    scaleBiggerElement.addEventListener('click', window.editing.scaleBiggerHandler);
    hashtagInputElement.addEventListener('input', window.validation.hashtagInputHandler);
  };

  var closeEditorForm = function () {
    editFormElement.classList.add('hidden');
    document.removeEventListener('keydown', editFormEscPressHandler);
    uploadNewElement.value = '';
    editedPhotoElement.style.filter = '';
    editedPhotoElement.style.transform = '';
    editedPhotoElement.classList.remove('effects__preview--' + window.editing.actualFilter);
    scaleValueElement.value = 100 + '%';
    document.querySelector('body').classList.remove('modal-open');
    editFormElement.removeEventListener('change', window.editing.photoElementChangeHandler);
    effectToggleElement.removeEventListener('mouseup', window.editing.toggleMouseUpHandler);
    scaleSmallerElement.removeEventListener('click', window.editing.scaleSmallerClickHandler);
    scaleBiggerElement.removeEventListener('click', window.editing.scaleBiggerClickHandler);
    hashtagInputElement.removeEventListener('input', window.validation.hashtagInputHandler);
  };

  uploadNewElement.addEventListener('change', function (evt) {
    evt.preventDefault();
    openEditorForm();
  });

  uploadNewElement.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      openEditorForm();
    }
  });

  editFormCloseElement.addEventListener('keydown', function () {
    closeEditorForm();
  });

  editFormCloseElement.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      closeEditorForm();
    }
  });
})();
