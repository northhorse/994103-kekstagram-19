'use strict';

(function () {

  var galleryOverlay = document.querySelector('body');

  var editingSection = document.querySelector('.img-upload');
  var fileUploadBtn = editingSection.querySelector('.img-upload__input');
  var previewSectionElement = editingSection.querySelector('.img-upload__overlay');
  var effectsLevel = editingSection.querySelector('.effect-level');
  var closePreviewSectionBtn = editingSection.querySelector('.img-upload__close');
  var submitPhotoBtn = editingSection.querySelector('.img-upload__submit');
  var pictureScaleValue = editingSection.querySelector('.scale__control--value');
  var editingSectionComment = editingSection.querySelector('.text__hashtags');
  var editingSectionHashtag = editingSection.querySelector('.text__description');
  var editingSectionFilters = editingSection.querySelector('.img-upload__preview img');

  var currentScaleValue = 1;

  // Функция возвращает фильтры на исходную.

  function resetFilters() {
    editingSectionHashtag.value = '';
    editingSectionComment.value = '';
    editingSectionFilters.className = 'effects__preview--none';
    pictureScaleValue.value = currentScaleValue * window.constants.SCALE_PERCENT + '%';
  }

  // Закрываем окно фильтров Еsc

  function editingSectionEscHandler() {
    if (document.activeElement !== editingSectionHashtag && document.activeElement !== editingSectionComment) {
      closeEditingSection();
    }
  }

  // Функция закроет окно редактирования

  function closeEditingSection() {
    window.utils.addClassName(previewSectionElement, 'hidden');
    window.utils.removeClassName(galleryOverlay, 'modal-open');

    closePreviewSectionBtn.removeEventListener('click', closeEditingSection);
    submitPhotoBtn.removeEventListener('submit', closeEditingSection);
    document.removeEventListener('keydown', editingSectionEscHandler);
  }

  // Функция вынесет с ноги окно редактирования

  function openEditingSection() {
    window.utils.addClassName(effectsLevel, 'hidden');
    resetFilters();

    window.utils.addClassName(galleryOverlay, 'modal-open');
    window.utils.removeClassName(previewSectionElement, 'hidden');

    window.filters


  }






})();

