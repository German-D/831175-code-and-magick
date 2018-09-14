'use strict';

var setupBlock = document.querySelector('.overlay');
setupBlock.classList.remove('hidden');
var showBlock = document.querySelector('.setup-similar');
showBlock.classList.remove('hidden');








var manyNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон'];
var manySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var manyCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var manyEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var manyMages = [];
var randomNumber = function (maxNumber) {
  return Math.round(Math.random() * maxNumber);
};

for (var i = 0; i < 4; i++) {
  manyMages.push({
    name: manyNames[randomNumber(8)], 
    surname: manySurnames[randomNumber(8)], 
    coatColor: manyCoatColor[randomNumber(5)], 
    eyesColor: manyEyesColor[randomNumber(4)]});
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < manyMages.length; j++) {
  fragment.appendChild(renderWizard(manyMages[j]));
}
similarListElement.appendChild(fragment);
