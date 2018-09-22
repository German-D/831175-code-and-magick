'use strict';
var showElement = function (classSelector, classRemove) {
  document.querySelector('.' + classSelector).classList.remove(classRemove);
};

showElement('setup-similar', 'hidden');

var manyNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон'];
var manySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var manyCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var manyEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var manyFireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var randomNumber = function (maxNumber) {
  return Math.round(Math.random() * maxNumber);
};

var randArr = function (anyArr) {
  return anyArr[randomNumber(anyArr.length - 1)];
};

var createManyMages = function (numberObj) {
  var moreMages = [];
  for (var i = 0; i < numberObj; i++) {
    moreMages.push({
      name: function () {
        var wizardFio = [];
        for (var y = 0; y < 7; y++) {
          wizardFio.push(manyNames[y] + ' ' + manySurnames[y]);
        }
        return wizardFio[randomNumber(6)];
      },
      coatColor: randArr(manyCoatColor),
      eyesColor: randArr(manyEyesColor)});
  }
  return moreMages;
};

var createWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name();
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizard = function (sameMages) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < sameMages.length; j++) {
    fragment.appendChild(createWizard(sameMages[j], similarWizardTemplate));
  }
  similarListElement.appendChild(fragment);
};

renderWizard(createManyMages(4));

var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = setupWindow.querySelector('.setup-user-name');
var coatColorInput = document.querySelector('input[name="coat-color"]');
var eyesColorInput = document.querySelector('input[name="eyes-color"]');
var fireballsColorInput = document.querySelector('input[name="fireball-color"]');
var coatColorElement = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var eyeColorElement = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var fireballElement = document.querySelector('.setup-fireball-wrap');
var escKeyCode = 27;
var enterKeyCode = 13;
var onFormShow = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
var onFormHide = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};
var onKeyFormShow = function (evt) {
  if (evt.keyCode === enterKeyCode) {
    onFormShow();
  }
};

var onKeyFormClose = function (evt) {
  if (evt.keyCode === enterKeyCode) {
    onFormHide();
  }
};

var onInputCoat = function () {
  coatColorElement.style.fill = manyCoatColor[randomNumber(manyCoatColor.length - 1)];
  coatColorInput.value = coatColorElement.style.fill;
};

var onInputEye = function () {
  eyeColorElement.style.fill = manyEyesColor[randomNumber(manyEyesColor.length - 1)];
  eyesColorInput.value = eyeColorElement.style.fill;
};

var onInputFireballs = function () {
  fireballElement.style.background = manyFireballs[randomNumber(manyFireballs.length - 1)];
  fireballsColorInput.value = fireballElement.style.background;
};

var onInputValidity = function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === escKeyCode) {
    onFormHide();
  }
};

var onInputFocus = function () {
  document.removeEventListener('keydown', onPopupEscPress);
};

var onInputBlur = function () {
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', onFormShow);
setupClose.addEventListener('click', onFormHide);
setupOpen.addEventListener('keydown', onKeyFormShow);
setupClose.addEventListener('keydown', onKeyFormClose);
userNameInput.addEventListener('invalid', onInputValidity);
coatColorElement.addEventListener('click', onInputCoat);
eyeColorElement.addEventListener('click', onInputEye);
fireballElement.addEventListener('click', onInputFireballs);
userNameInput.addEventListener('focus', onInputFocus);
userNameInput.addEventListener('blur', onInputBlur);


