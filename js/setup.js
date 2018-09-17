'use strict';
var showElement = function (classSelector, classRemove) {
  document.querySelector('.' + classSelector).classList.remove(classRemove);
};

showElement('overlay', 'hidden');
showElement('setup-similar', 'hidden');

var manyNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон'];
var manySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var manyCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var manyEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFio = [];

for (var y = 0; y < 7; y++) {
  wizardFio.push(manyNames[y] + ' ' + manySurnames[y]);
}

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
      name: randArr(wizardFio),
      coatColor: randArr(manyCoatColor),
      eyesColor: randArr(manyEyesColor)});
  }
  return moreMages;
};

var manyMages = createManyMages(4);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizard = function (sameMages) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < sameMages.length; j++) {
    fragment.appendChild(createWizard(sameMages[j]));
  }
  similarListElement.appendChild(fragment);
};

renderWizard(manyMages);


