var Game = Game || {};

Game.gridBase                   = 4;
Game.gridHeight                 = 3;
Game.width                      = 800;
Game.height                     = 600;
// Game.sequenceT                  = [];
// Game.sequenceLengthTrump        = 9;
// Game.sequenceC                  = [];
// Game.sequenceLengthClinton      = 5;
// Game.sequenceO                  = [];
// Game.sequenceLengthObama        = 2;
Game.politicians                = ['trump', 'clinton', 'obama'];

Game.start = function (){
  Game.score = document.getElementById('score');
  Game.score.innerHTML = 0;
  Game.lives = document.getElementById('lives');
  Game.lives.innerHTML = 3;
  Game.createGrid();

};

Game.checkForPoints = function() {
  if ($(this).attr('class') === 'trump') {
    Game.score.innerHTML = parseInt(Game.score.innerHTML) + 10;
  } else if ($(this).attr('class') === 'clinton') {
    Game.score.innerHTML = parseInt(Game.score.innerHTML) - 10;
  } else if ($(this).attr('class') === 'obama') {
    Game.lives.innerHTML = parseInt(Game.lives.innerHTML) - 1;
  }
};

Game.createGrid = function () {
  var body = document.getElementsByTagName('main')[0];
  var grid = document.createElement('ul');
  body.appendChild(grid);
  for (var i = 0; i < Game.gridBase*Game.gridHeight; i++) {
    var square = document.createElement('li');
    grid.appendChild(square);
    square.style.width  = (Game.width/Game.gridBase) + 'px';
    square.style.height = (Game.height/Game.gridHeight) + 'px';
    grid.appendChild(square);
  }
  $('li').on('click', Game.checkForPoints);
  Game.setTimer();
};

Game.setTimer = function() {
  var counter = 20;
  var interval = function() {
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        var span = document.getElementById('timer');
        span.innerHTML = counter;
      }
      if (counter === 0) {
        alert('Sorry, out of time');
        clearInterval(interval);
      }
      Game.displayMole();
    }, 1000);
  };

  document.getElementsByTagName('button')[0].addEventListener('click', interval);

  // need to figure out timer!!
  // Game.SequenceTrump();
  // Game.SequenceClinton();
  // Game.SequenceObama();
};

Game.displayMole = function() {
  $('li').removeClass('trump clinton obama');
  var lis = document.getElementsByTagName('li');
  var randomLi = Math.floor(Math.random() * lis.length);
  var randomPolitician = Math.floor(Math.random() * Game.politicians.length);
  lis[randomLi].setAttribute('class', Game.politicians[randomPolitician]);
};

// TRUMP
//
// Game.SequenceTrump = function() {
//   for (var i = 0; i < Game.sequenceLengthTrump; i++) {
//     Game.sequenceT.push(Game.randomSequenceNumberTrump());
//   }
//   Game.trump();
// };
//
// Game.randomSequenceNumberTrump = function() {
//   return Math.round(Math.random() * (Game.gridBase * Game.gridHeight));
// };
//
// Game.trump = function() {
//   var squares = document.getElementsByTagName('li');
//   for (var i = 0; i < Game.sequenceT.length; i++) {
//     console.log('blup');
//     squares[Game.sequenceT[i]].setAttribute('class', 'trump');
//   }
//   Game.pointsT();
// };
//
// Game.pointsT = function(){
//   var pointsT = document.getElementsByClassName('trump');
//   for (var i = 0; i < pointsT.length; i++) {
//     pointsT[i].addEventListener('click', Game.earnPointsT);
//   }
// };
//
// Game.earnPointsT = function () {
//   Game.score.innerHTML = parseInt(Game.score.innerHTML) + 10;
// };
//
// // CLINTON
//
// // Game.SequenceClinton = function() {
// //   for (var i = 0; i < Game.sequenceLengthClinton; i++) {
// //     Game.sequenceC.push(Game.randomSequenceNumberClinton());
// //   }
// //   console.log(Game.sequenceC);
// //   Game.clinton();
// // };
// //
// // Game.randomSequenceNumberClinton = function() {
// //   return Math.round(Math.random() * (Game.gridBase * Game.gridHeight));
// // };
// //
// // Game.clinton = function() {
// //   var squares = document.getElementsByTagName('li');
// //   for (var i = 0; i < Game.sequenceC.length; i++) {
// //     squares[Game.sequenceC[i]].className = 'clinton';
// //   }
//   Game.pointsC();
// };
//
// Game.pointsC = function(){
//   var pointsC = document.getElementsByClassName('clinton');
//   for (var i = 0; i < pointsC.length; i++) {
//     pointsC[i].addEventListener('click', Game.earnPointsC);
//   }
// };
//
// Game.earnPointsC = function () {
//   Game.score.innerHTML = parseInt(Game.score.innerHTML) - 10;
// };
//
//
// // OBAMA
//
// // Game.SequenceObama = function() {
// //   for (var i = 0; i < Game.sequenceLengthObama; i++) {
// //     Game.sequenceO.push(Game.randomSequenceNumberObama());
// //   }
// //   console.log(Game.sequenceO);
// //   Game.obama();
// // };
// //
// // Game.randomSequenceNumberObama = function() {
// //   return Math.round(Math.random() * (Game.gridBase * Game.gridHeight));
// // };
// //
// // Game.obama = function() {
// //   var squares = document.getElementsByTagName('li');
// //   for (var i = 0; i < Game.sequenceO.length; i++) {
// //     squares[Game.sequenceO[i]].className = 'obama';
// //   }
//   Game.pointsO();
// };
//
// Game.pointsO = function(){
//   var pointsO = document.getElementsByClassName('obama');
//   for (var i = 0; i < pointsO.length; i++) {
//     pointsO[i].addEventListener('click', Game.earnPointsO);
//   }
// };
//
// Game.earnPointsO = function () {
//   Game.lives.innerHTML = parseInt(Game.lives.innerHTML) - 1;
// };

document.addEventListener('DOMContentLoaded', Game.start);
// find out why putting this at the top prevents it from running correctly
// check error message that sometimes occurs
