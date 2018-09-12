'use strict';

var cloudWidth = 420;
var cloudHeight = 270;

var cloudX = 100;
var cloudY = 10;
var letterY = 35;
var gap = 50; // расстояние между колонками
var fontGap = 15; // высота строки
var barHeight = 150; // высота столбца
var barWidth = 40;
var nameHeight = cloudHeight;
var letters = ['Ура, вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, shadowX, shadowY, shadowColor, x, y, color) {
  ctx.fillStyle = shadowColor;
  ctx.fillRect(shadowX, shadowY, cloudWidth, cloudHeight);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var renderCongrats = function (ctx, arr, x, y) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  for (var j = 0; j < arr.length; j++) {
    ctx.fillText(arr[j], x, y + j * 0.4 * y);
  }
};

var renderColumn = function (ctx, arr, arr2) {
  var maxTime = Math.max.apply(null, arr);

  arr2.forEach(function (item, i) {
    var currentColumnX = cloudX + gap + (gap + barWidth) * i;
    var currentColumnY = cloudHeight - fontGap * 2 - barHeight * arr[i] / maxTime;
    var currentColumnHeight = barHeight * arr[i] / maxTime;
    var randomNumber = parseFloat(Math.random().toFixed(2) || 1);
    var randomColor = 'rgba(0, 0, 255, ' + randomNumber + ')';
    var time = Math.round(arr[i]);

    ctx.fillStyle = item === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomColor;
    ctx.fillRect(currentColumnX, currentColumnY, barWidth, currentColumnHeight);
    ctx.fillText(item, currentColumnX, nameHeight);
    ctx.fillText(time, currentColumnX, cloudHeight - 3 * fontGap - currentColumnHeight);
  });
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudX + 10, cloudY + 10, 'rgba(0, 0, 0, 0.7)', cloudX, cloudY, '#fff');
  renderCongrats(ctx, letters, cloudX + 2 * fontGap, letterY);
  renderColumn(ctx, times, names);
};
