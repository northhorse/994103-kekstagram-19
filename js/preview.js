'use strict';
(function () {
  var galleryOverlay = document.querySelector('body');
  var picturesList = document.querySelector('.pictures');
  var bigPicture = document.querySelector('.big-picture');
  var closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
  var usersMessages = bigPicture.querySelector('.social__comments');

  // генерируем коммент к фото

  function createMessage(comment) {
    var userMessage = window.utils.createDomElement('li', 'social__comment');
    var userMessageText = window.utils.createDomElement('p', 'social__text');
    var userMessagePicture = window.utils.createDomElement('img', 'social__picture');

    userMessageText.textContent = comment.message;

    userMessagePicture.width = window.constants.USER_AVATAR_SIZE;
    userMessagePicture.height = window.constants.USER_AVATAR_SIZE;
    userMessagePicture.alt = window.constants.USER_AVATAR_ALT;
    userMessagePicture.src = comment.avatar;

    userMessage.appendChild(userMessagePicture);
    userMessage.appendChild(userMessageText);

    return userMessage;
  }

  // Генерируем  коменты

  function renderMessageSet(array) {
    window.utils.removeChilds(usersMessages);
    var fragmentMessage = document.createDocumentFragment();
    for (var i = 0; i < array.length; i++) {
      fragmentMessage.appendChild(createMessage(array[i]));
    }
    usersMessages.appendChild(fragmentMessage);
  }

  // готовим фотку к большой премьере

  function renderPreviewPicture(pictureIndex) {
    var arrayPictures = window.data.getCurrentData();
    var pictureUrl = bigPicture.querySelector('.big-picture__img img');
    var pictureLikes = bigPicture.querySelector('.likes-count');
    var pictureMessagesCount = bigPicture.querySelector('.comments-count');
    var pictureDescription = bigPicture.querySelector('.social__caption');

    renderMessageSet(arrayPictures[pictureIndex].messages);
    pictureUrl.src = arrayPictures[pictureIndex].url;
    pictureLikes.textContent = arrayPictures[pictureIndex].likes;
    pictureMessagesCount.textContent = arrayPictures[pictureIndex].messages.length;
    pictureDescription.textContent = arrayPictures[pictureIndex].description;
  }

  // премьера биг пикчи

  function openBigPicture(pictureIndex) {
    var messagesCounter = bigPicture.querySelector('.social__comment-count');
    var messagesLoader = bigPicture.querySelector('.comments-loader');

    window.utils.addClassName(messagesCounter, 'hidden');
    window.utils.addClassName(messagesLoader, 'hidden');

    renderPreviewPicture(pictureIndex);

    window.utils.addClassName(galleryOverlay, 'modal-open');
    window.utils.removeClassName(bigPicture, 'hidden');

    closeBigPicture.addEventListener('click', pictureCloseHandler);
    document.addEventListener('keydown', pictureKeyCloseHandler);
  }

  function pictureCloseHandler() {
    closeBigPicture();
  }

  function pictureKeyCloseHandler(evt) {
    evt.preventDefault();
    if (evt.key === window.constants.ESC_KEY || evt.key === window.constants.ENTER_KEY) {
      closeBigPicture();
    }
  }

  function closeBigPicture() {
    window.utils.removeClassName(galleryOverlay, 'modal-open');
    window.utils.addClassName(bigPicture, 'hidden');
    pictureKeyCloseHandler.removeEventListener('click', pictureCloseHandler);
    document.removeEventListener('keydown', pictureKeyCloseHandler);
  }

  var showPhoto = function () {
    picturesList.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('picture__img')) {
        var pictureNumber = evt.target.dataset.id;
        openBigPicture(pictureNumber);
      }
    });


    picturesList.addEventListener('keydown', function (evt) {
      if (evt.key === window.constants.ENTER_KEY && evt.target.classList.contains('picture')) {
        evt.preventDefault();
        var pictureNumber = evt.target.querySelector('img').dataset.id;
        openBigPicture(pictureNumber);
      }
    });
  };

  window.preview = {
    showPhoto: showPhoto,
  };

})();

