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
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

var renderCongrats = function (ctx, letter, x, y) {
  ctx.fillText(letter, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudX + 10, cloudY + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudX, cloudY, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  renderCongrats(ctx, 'Ура, вы победили!', cloudX + fontGap, cloudY + 2 * fontGap);
  renderCongrats(ctx, 'Список результатов:', cloudX + fontGap, cloudY + 3 * fontGap);

  var maxTime = Math.max.apply(Math, times);

  names.forEach(function (item, i) {
    var currentColumnX = cloudX + gap + (gap + barWidth) * i;
    var currentColumnY = cloudHeight - fontGap * 2 - barHeight * times[i] / maxTime;
    var currentColumnHeight = barHeight * times[i] / maxTime;
    var randomNumber = parseFloat(Math.random().toFixed(2));
    var randomColor = 'rgba(0, 0, 255, ' + randomNumber + ')';

    ctx.fillStyle = item === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomColor;
    ctx.fillText(item, currentColumnX, nameHeight);
    ctx.fillText(Math.round(times[i]), currentColumnX, cloudHeight - 3 * fontGap - currentColumnHeight);
    ctx.fillRect(currentColumnX, currentColumnY, barWidth, currentColumnHeight);
  });
};
