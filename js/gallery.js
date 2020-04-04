'use strict';


(function () {
  // рендерим фотки в шаблон

  function renderPicture(image, pictureIndex) {
    var picturesTemplateElement = document.querySelector('#picture').content;
    var picturesElement = picturesTemplateElement.cloneNode(true);

    picturesElement.querySelector('.picture__img').src = image.url;
    picturesElement.querySelector('.picture__likes').textContent = image.likes;
    picturesElement.querySelector('.picture__comments').textContent = image.messages.length;
    picturesElement.querySelector('.picture img').setAttribute('data-id', pictureIndex);

    return picturesElement;
  }

  window.gallery = {
    fillMockPhotos: function (arrayPictures) {

      var picturesList = document.querySelector('.pictures');
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < arrayPictures.length; i++) {
        fragment.appendChild(renderPicture(arrayPictures[i], i));
      }

      window.preview.showPhoto(arrayPictures);

      picturesList.appendChild(fragment);
    }
  };


})();
