'use strict';

(function () {
  var picturesData = {
    PHOTO_QUANTITY: 25,
    MIN_LIKES: 15,
    MAX_LIKES: 200,
    MIN_AVATARS: 1,
    MAX_AVATARS: 6,
    MIN_COMMENTS: 0,
    MAX_COMMENTS: 211,

    userMessage: [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ],

    usersName: [
      'Антон',
      'Александр',
      'Иван',
      'Коля',
      'Лукреция',
      'Марина',
      'Наполеон',
    ],

    imageDescription: [
      'Пингвины Живут в Антарктиде',
      'Они не умеют летать',
      'Они кушают только рыбу',
      'Окрас у них черно белый',
      'Обитают пингвины стаями',
      'С раннего детство они учатся плавать',
      'Мне очень нравятся пингвины',
      'Я бы хотел быть пингвином, они ниндзя js',
      'Пингвин наоборот Нивгнип - как-то не ок',
    ],
  };

  // generate random count of comments on blog
  function generateMessage() {
    var messages = [];

    var commentsCount = getRandomNumber(picturesData.MIN_AVATARS, picturesData.MAX_AVATARS - 1);

    for (var i = 0; i < commentsCount; i++) {
      messages.push({
        avatar: generateSrcImage(),
        name: getRandomElement(picturesData.usersName),
        message: getRandomElement(picturesData.userMessage)
      });
    }
    return messages;
  }

  // Функция, возвращающая url аватара
  function generateSrcImage() {
    var numberImage = getRandomNumber(picturesData.MIN_AVATAR, picturesData.MAX_AVATAR);
    return 'img/avatar-' + numberImage + '.svg';
  }

  // Функция, возвращающая случайное число в диапазоне
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция, возвращающая случайный элемемент массива
  function getRandomElement(array) {
    var randomIndex = getRandomNumber(0, array.length - 1);
    var randomElement = array[randomIndex];
    return randomElement;
  }

  window.data = {

    getCurrentData: function () {
      var socialNotes = [];
      for (var j = 1; j < picturesData.PHOTO_QUANTITY + 1; j++) {
        socialNotes.push({
          url: 'photos/' + j + '.jpg',
          likes: getRandomNumber(picturesData.MIN_LIKES, picturesData.MAX_LIKES),
          messages: generateMessage(),
          description: getRandomElement(picturesData.imageDescription)
        });
      }
      return socialNotes;
    }
  };

})();

