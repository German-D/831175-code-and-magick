'use strict';

var cloudWidth = 420;
var cloudHeight = 270;

var cloudX = 100;
var cloudY = 10;
var letterY = 25;
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
  for (var j = 1; j <= arr.length; j++) {
    ctx.fillText(arr[j], x, y * j);
  }
};

var renderColumn = function (ctx, x, y, width, height, names, namesX, namesY, times, timesY) {
  ctx.fillRect(x, y, width, height);
  ctx.fillText(names, namesX, namesY);
  ctx.fillText(times, namesX, timesY);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = Math.max.apply(null, times);
  renderCloud(ctx, cloudX + 10, cloudY + 10, 'rgba(0, 0, 0, 0.7)', cloudX, cloudY, '#fff');
  renderCongrats(ctx, letters, cloudX + fontGap, letterY);

  names.forEach(function (item, i) {
    var currentColumnX = cloudX + gap + (gap + barWidth) * i;
    var currentColumnY = cloudHeight - fontGap * 2 - barHeight * times[i] / maxTime;
    var currentColumnHeight = barHeight * times[i] / maxTime;
    var randomNumber = parseFloat(Math.random().toFixed(2) || 1);
    var randomColor = 'rgba(0, 0, 255, ' + randomNumber + ')';
    var time = Math.round(times[i]);

    ctx.fillStyle = item === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomColor;
    renderColumn(ctx, currentColumnX, currentColumnY, barWidth, currentColumnHeight, item, currentColumnX, nameHeight, time, cloudHeight - 3 * fontGap - currentColumnHeight);
  });
};
