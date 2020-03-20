'use strict';
// константы
var NUMBER_OF_PHOTOS = 25;
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var MIN_AVATARS = 1;
var MAX_AVATARS = 6;

// массив описаний к фото
var photoDescription = [
  'Гора',
  'Дуб',
  'Море',
  'Марс',
  'Луна',
  'Звёзды',
];

// массив комментариев к фото
var comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// массив имен
containnerz();
function containnerz() {
  for (var j = 0; j < 25; j++) {
    var comCont = [];
    var obj = {}
    obj.avatar = 'img/avatar-';
    obj.message = 132321;
    obj.name = n32131313;

    comCont.push(obj);
  }
  return comCont;

}


// ?.querySelector('.pictures');
// var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// var renderPhoto = function (arr) {
//   var photoElement = pictureTemplate.cloneNode(true);

//   photoElement.querySelector('.picture__img').src = arr.url;
//   photoElement.querySelector('.picture__likes').textContent = arr.likes;
//   photoElement.querySelector('.picture__comments').textContent = arr.comments;

//   return photoElement;
// };

// var addPhoto = function (int) {
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < getPhotoObject(int); i++) {
//     fragment.appendChild(renderPhoto(getPhotoObject(int)[i]));
//   }
//   return fragment;
// };

// pictureListElement.appendChild(addPhoto(NUMBER_OF_PHOTOS));


// Раздел 4 - Обработка событий. Задание 9, Личный проект: доверяй, но проверяй
// Реализация показа окна редактора (задача 1)

// var ESC_KEY = 'Escape';
// var photoEditor = document.querySelector('.img-upload__overlay');
// var uploadPhoto = document.querySelector('#upload-file');
// var closeBtn = photoEditor.querySelector('#upload-cancel');
// var commentsInput = document.querySelector('.text__description');
// var hashtagsInput = document.querySelector('.text__hashtags');

// //


// var openEditor = function () {
//   photoEditor.classList.remove('hidden');
//   document.addEventListener('keydown', editorEscPressHandler);


// };

// var closeEditor = function () {
//   uploadPhoto.value = '';
//   photoEditor.classList.add('hidden');
//   document.removeEventListener('keydown', editorEscPressHandler);


// };

// uploadPhoto.addEventListener('change', openEditor);
// closeBtn.addEventListener('click', closeEditor);

// // Редактирование размера изображения задача 2
// // переменные и константы


// var currentValue = STANDART_SCALE;

// // Подключение к дом узлам

// var scalePhoto = document.querySelector('.scale');
// var buttonIncrease = scalePhoto.querySelector('.scale__control--bigger');
// var buttonMinus = scalePhoto.querySelector('.scale__control--smaller');
// var scaleValue = scalePhoto.querySelector('.scale__control--value');
// var imagePreview = photoEditor.querySelector('.img-upload__preview img');

// // Функция отображает и меняет изображение в зависимости
// // от нажатых клавиш.


// var changeScaleValue = function () {
//   scaleValue.value = currentValue + '%';
//   imagePreview.style.transform = 'scale(' + currentValue / 100 + ')';
// };


// buttonMinus.addEventListener('click', function () {
//   if (currentValue > MIN_SCALE) {
//     currentValue -= STEP_SCALE;
//     changeScaleValue();
//   }
// });

// buttonIncrease.addEventListener('click', function () {
//   if (currentValue < MAX_SCALE) {
//     currentValue += STEP_SCALE;
//     changeScaleValue();

//   }
// });


// // Наложение эффекта на изображение. Задача.3

// var effects = document.querySelector('.effects');
// var controls = effects.querySelectorAll('.effects__radio');
// var effectlvl = document.querySelector('.effect-level');
// var effectPin = document.querySelectorAll('.effec-level__pin');
// var effectDepth = document.querySelector('.effec-depth');


// var changeEffect = function (control) {

//   control.addEventListener('change', function () {
//     var newEffect = 'effects__preview--' + control.value;
//     if (control.value !== 'none') {
//       effectlvl.classList.remove('hidden');
//     } else {
//       effectlvl.classList.add('hidden');
//     }
//     imagePreview.className = newEffect;
//     imagePreview.style.filter = '';
//     effectPin.style.left = '';
//     effectDepth.style.width = '';
//   });
// };

// for (var j = 0; j < controls.length; j++) {
//   changeEffect(controls[j]);
// }

// // Валидация хештегов.

// hashtagsInput.addEventListener('input', function (evt) {
//   var target = evt.target;
//   var targetValue = target.value;
//   var arr = targetValue.split(' ');
//   var arrMessage = [];

//   for (var z = 0; arr.length; z++) {
//     arrMessage[z] = arrMessage[z].split(' ');
//   }

//   var arrMessageFilter = arrMessage.filter(function (elem) {
//     if (elem.indexOf('#') === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });


//   if (arrMessageFilter.length !== arrMessage.length) {
//     target.setCustomValidity('');
//   }

//   if (arr.length > 3) {
//     target.setCustomValidity('НЕ более 3 хеш-тегов.');
//   }
// });

// не правильно реализлвад полверку хештегов.

// нужно пересмотреть лекции по самозап функциям. Посмотри что у меня на данный момент.

// может посоветеуешь что.
