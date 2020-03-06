'use strict';

(function () {

  var pictureListElement = document.querySelector('.pictures');
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


  var createDescription = function (description) {
    var photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = description.url;
    photoElement.querySelector('.picture__img').alt = description.description;
    photoElement.querySelector('.picture__likes').textContent = description.likes;
    photoElement.querySelector('.picture__comments').textContent = description.comments;

    return photoElement;
  };

  var addPhotoElement = function (pictureData) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictureData.length; i++) {
      fragment.appendChild(createDescription(pictureData[i]));
    }
    pictureListElement.appendChild(fragment);
  };

  addPhotoElement(window.data.photosAlbum);

})();
