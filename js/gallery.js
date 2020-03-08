'use strict';

(function () {

  var pictureListElement = document.querySelector('.pictures');
  var pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
  var commentTemplateElement = document.querySelector('.social__comments');

  var createDescription = function (description) {
    var photoElement = pictureTemplateElement.cloneNode(true);

    photoElement.querySelector('.picture__img').src = description.url;
    photoElement.querySelector('.picture__img').alt = description.description;
    photoElement.querySelector('.picture__likes').textContent = description.likes;
    photoElement.querySelector('.picture__comments').textContent = description.comments.length;

    return photoElement;
  };

  var addElements = function (pictureData) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictureData.length; i++) {
      fragment.appendChild(createDescription(pictureData[i]));
    }
    pictureListElement.appendChild(fragment);
  };

  addElements(window.data.photosAlbum);


  var createNewCommentSample = function (dataComments) {
    var commentElement = commentTemplateElement.cloneNode(true);

    commentElement.querySelector('.social__picture').src = dataComments.avatar;
    commentElement.querySelector('.social__picture').alt = dataComments.name;
    commentElement.querySelector('.social__text').textContent = dataComments.message;

    return commentElement;
  };

  var addCommentsElements = function (dataComments, element) {
    element.innerHTM = '';
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < dataComments.length; i++) {
      element.appendChild(createNewCommentSample(dataComments[i]));
    }
    element.appendChild(fragment);
  };

  window.gallery = {
    addCommentsElements: addCommentsElements
  };
})();

