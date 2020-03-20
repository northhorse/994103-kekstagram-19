'use strict';

(function () {


  var imgUploadElement = document.querySelector('.img-upload');
  var imgUploadFormElement = imgUploadElement.querySelector('.img-upload__form');
  var uploadFile = imgUploadElement.querySelector('#upload-file');

  var imgUploadPreview = imgUploadElement.querySelector('.img-upload__preview img');
  var imgEffectsPreviews = imgUploadElement.querySelectorAll('.effects__preview');

  var imgEditor = imgUploadElement.querySelector('.img-upload__overlay');
  var imgEditorCancelElement = imgEditor.querySelector('.img-upload__cancel');

  var uploadTextElement = imgEditor.querySelector('.img-upload__text');
  var hashtagsElement = uploadTextElement.querySelector('.text__hashtags');
  var commentElement = uploadTextElement.querySelector('.text__description');

  var scaleControlSmall = imgEditor.querySelector('.scale__control--smaller');
  var scaleControlValue = imgEditor.querySelector('.scale__control--value');
  var scaleControlBig = imgEditor.querySelector('.scale__control--bigger');

  var onEditorEscPress = function (evt) {
    if (evt.key === window.utils.ESC_KEY && commentElement !== document.activeElement && hashtagsElement !== document.activeElement) {
      closeImgEditor();
    }
  };

  // показываем форму + обработчики

  function openImgEditor() {

    imgEditor.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    imgEditor.addEventListener('keydown', onEditorEscPress);
    imgEditorCancelElement.addEventListener('click', closeImgEditor);

    scaleControlSmall.addEventListener('click', onControlSmallClick);
    scaleControlBig.addEventListener('click', onControlBigClick);

    imgUploadFormElement.addEventListener('change', onImgFilterChange);

    hashtagsElement.addEventListener('focus', onHashtagsFocus);
    hashtagsElement.addEventListener('blur', onHashtagsBlur);

    commentElement.addEventListener('focus', onCommentFocus);
    commentElement.addEventListener('blur', onCommentBlur);

    uploadFile.addEventListener('change', onImgUploadChange);

    window.sliderWidth = document.querySelector('.effect-level__line').offsetWidth;
    window.pinWidth = document.querySelector('.effect-level__pin').offsetWidth;
  }

  // скрываем

  function closeImgEditor() {
    document.querySelector('body').classList.remove('modal-open');
    imgEditor.classList.add('hidden');


    imgEditor.removeEventListener('keydown', onEditorEscPress);
    imgEditorCancelElement.removeEventListener('click', closeImgEditor);
    scaleControlSmall.removeEventListener('click', onControlSmallClick);
    scaleControlBig.removeEventListener('click', onControlBigClick);

    imgUploadFormElement.removeEventListener('change', onImgFilterChange);

    hashtagsElement.removeEventListener('focus', onHashtagsFocus);
    hashtagsElement.removeEventListener('blur', onHashtagsBlur);

    commentElement.removeEventListener('focus', onCommentFocus);
    commentElement.removeEventListener('blur', onCommentBlur);
    resetUploadFile();
    deleteImgFilters();

  }

  // // меняем изображение
  function changeUploadImg() {
    var uploadNewPic = uploadFile.files[0];
    var newPicSrc = window.URL.createObjectURL(uploadNewPic);
    imgUploadPreview.src = newPicSrc;

    for (var i = 0; i < imgEffectsPreviews.length; i++) {
      imgEffectsPreviews[i].style.backgroundImage = 'url("' + newPicSrc + '")';
    }
  }

  // // нажатие на загрузку

  function onImgUploadChange() {
    changeUploadImg();
    openImgEditor();
  }

  uploadFile.addEventListener('change', onImgUploadChange);

  function onControlSmallClick() {
    resizeImg('-');
  }

  // Обработчик нажатия на кнопку увеличения фотографии
  function onControlBigClick() {
    resizeImg('+');
  }

  function resetUploadFile() {
    uploadFile.value = '';
    imgUploadPreview.src = 'img/upload-default-image.jpg';

    for (var i = 0; i < imgEffectsPreviews.length; i++) {
      imgEffectsPreviews[i].removeAttribute('style');
    }
  }



  // Меняет изображение (уменьшает / увеличивает) в зависимости от переданного аргумента
  function resizeImg (operator) {
    var value = parseInt(scaleControlValue.value, 10);

    if (value < 100 && operator === '+') {
      value += 25;
    } else if (value > 25 && operator === '-') {
      value -= 25;
    }

    scaleControlValue.value = value + '%';
    imgUploadPreview.style.transform = 'scale(' + value / 100 + ')';
  }

  // Удаляет фильтры с фотографии
  function deleteImgFilters() {
    imgUploadPreview.removeAttribute('style');
    imgUploadPreview.removeAttribute('class');
  }

  // Меняет фильтр на фотографии
  function changeimgFilter(filter) {
    deleteImgFilters();
    imgUploadPreview.classList.add(filter);
  }

  // Обрабатывает смену фильтров и применяет выбранный фильтр на фотографию
  function onImgFilterChange(evt) {

    if (evt.target.classList.contains('effects__radio')) {
      changeimgFilter('effects__preview--' + evt.target.value);
      window.activeFilter = evt.target.value;
    }
  }
})();




