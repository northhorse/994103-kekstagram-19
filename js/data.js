'use strict';

(function () {
  var PHOTO_QUANTITY = 25;
  var MIN_LIKES = 15;
  var MAX_LIKES = 200;
  var MIN_AVATARS = 1;
  var MAX_AVATARS = 6;
  var MIN_COMMENTS = 0;
  var MAX_COMMENTS = 2;

  var message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  var names = [
    'Антон',
    'Александр',
    'Иван',
    'Коля',
    'Лукреция',
    'Марина',
    'Наполеон',
  ];

  var createComments = function (max) {
    var comments = [];
    for (var i = 0; i < max; i++) {
      comments[i] = {
        avatar: 'img/avatar-' + window.utils.getRndRange(MIN_AVATARS, MAX_AVATARS) + '.svg',
        message: window.utils.getRndElement(message),
        name: window.utils.getRndElement(names),
      };
    }
    return comments;
  };


  var getPhoto = function (number) {
    var photoCard = [];
    for (var i = 0; i < number; i++) {
      photoCard[i] = {
        url: 'photos/' + (i + 1) + '.jpg',
        description: 'window.utils.getRndElement(photoDescription),',
        likes: window.utils.getRndRange(MIN_LIKES, MAX_LIKES),
        comments: createComments(window.utils.getRndRange(MIN_COMMENTS, MAX_COMMENTS)),
      };
    }
    return photoCard;
  };

  var photosAlbum = getPhoto(PHOTO_QUANTITY);
  window.data = {
    photosAlbum: photosAlbum
  };

})();


