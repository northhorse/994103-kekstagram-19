'use strict';

var NUMBER_OF_PHOTOS = 25;
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var MIN_AVATARS = 1;
var MAX_AVATARS = 6;

var photoDescription = [
  'Гора',
  'Дуб',
  'Море',
  'Марс',
  'Луна',
  'Звёзды',
];

var comments = [
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

var getRndRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRndElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var getPhotoObject = function (photosNumbers) {
  var mockArr = [];
  for (var i = 0; i < photosNumbers; i++) {
    var photoObject = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: photoDescription[getRndElement(photoDescription)],
      likes: getRndRange(MIN_LIKES, MAX_LIKES),

      comments: [
        {
          avatar: 'img/avatar-' + getRndRange(MIN_AVATARS, MAX_AVATARS),
          message: comments[getRndElement(comments)] + ' ' + comments[getRndElement(comments)],
          name: names[getRndElement(names)]
        },
        {
          avatar: 'img/avatar-' + getRndRange(MIN_AVATARS, MAX_AVATARS),
          message: comments[getRndElement(comments)] + ' ' + comments[getRndElement(comments)],
          name: names[getRndElement(names)]
        }
      ]
    };
    mockArr.push(photoObject);
  }
  return mockArr;
};

var pictureListElement = document.querySelector('.pictures');

var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

var renderPhoto = function (arr) {
  var photoElement = pictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = arr.url;
  photoElement.querySelector('.picture__likes').textContent = arr.likes;
  photoElement.querySelector('.picture__comments').textContent = arr.comments;

  return photoElement;
};

var addPhoto = function (int) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < getPhotoObject(int); i++) {
    fragment.appendChild(renderPhoto(getPhotoObject(int)[i]));
  }
  return fragment;
};

pictureListElement.appendChild(addPhoto(NUMBER_OF_PHOTOS));
