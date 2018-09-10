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

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  } return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudX + 10, cloudY + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudX, cloudY, '#fff');


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', cloudX + fontGap, cloudY + 2 * fontGap);
  ctx.fillText('Список результатов:', cloudX + fontGap, cloudY + 3 * fontGap);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var randomColor = 'rgba(0, 153, 255, ' + randomNumber + ')';
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomColor;
    console.log(ctx.fillStyle);
    console.log('randomColor ' + randomColor);
    ctx.fillText(names[i], cloudX + gap + (gap + barWidth) * i, nameHeight);
    ctx.fillRect(cloudX + gap + (gap + barWidth) * i, barHeight * times[i] / maxTime, barWidth, cloudHeight - 2 * fontGap - barHeight * times[i] / maxTime);
  }

};
