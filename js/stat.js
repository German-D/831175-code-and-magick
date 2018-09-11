'use strict';

var cloudWidth = 420;
var cloudHeight = 270;

var cloudX = 100;
var cloudY = 10;
var gap = 50; // расстояние между колонками
var fontGap = 15; // высота строки
var barHeight = 150; // высота столбца
var barWidth = 40;
var nameHeight = cloudHeight;


var renderCloud = function (ctx, shadowX, shadowY, shadowColor, x, y, color) {
  ctx.fillStyle = shadowColor;
  ctx.fillRect(shadowX, shadowY, cloudWidth, cloudHeight);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var renderCongrats = function (ctx, letter1, letter2, x, y1, y2, color, fontsize, font) {
  ctx.fillStyle = color;
  ctx.font = fontsize + 'px ' + font;
  ctx.fillText(letter1, x, y1);
  ctx.fillText(letter2, x, y2);
};

var renderColumn = function (ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
};

var renderСaption = function (ctx, names, namesX, namesY, times, timesY) {
  ctx.fillText(names, namesX, namesY);
  ctx.fillText(times, namesX, timesY);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = Math.max.apply(null, times);
  renderCloud(ctx, cloudX + 10, cloudY + 10, 'rgba(0, 0, 0, 0.7)', cloudX, cloudY, '#fff');
  renderCongrats(ctx, 'Ура, вы победили!', 'Список результатов:', cloudX + fontGap, cloudY + 2 * fontGap, cloudY + 3 * fontGap, 'black', 16, 'PT Mono');

  names.forEach(function (item, i) {
    var currentColumnX = cloudX + gap + (gap + barWidth) * i;
    var currentColumnY = cloudHeight - fontGap * 2 - barHeight * times[i] / maxTime;
    var currentColumnHeight = barHeight * times[i] / maxTime;
    var randomNumber = parseFloat(Math.random().toFixed(2)) + 0.1;
    var randomColor = 'rgba(0, 0, 255, ' + randomNumber + ')';
    var time = Math.round(times[i]);

    ctx.fillStyle = item === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomColor;
    renderСaption(ctx, item, currentColumnX, nameHeight, time, cloudHeight - 3 * fontGap - currentColumnHeight);
    renderColumn(ctx, currentColumnX, currentColumnY, barWidth, currentColumnHeight);
  });
};
