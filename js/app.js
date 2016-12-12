var Game = Game || {};

Game.gridBase                   = 4;
Game.gridHeight                 = 3;
Game.width                      = 800;
Game.height                     = 600;
Game.sequenceT                  = [];
Game.sequenceLengthTrump        = 9;
Game.sequenceC                  = [];
Game.sequenceLengthClinton      = 5;
Game.sequenceO                  = [];
Game.sequenceLengthObama        = 2;


Game.start = function (){
  Game.createGrid();

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

  Game.SequenceTrump();
  // Game.SequenceClinton();
  // Game.SequenceObama();
};

// TRUMP

Game.SequenceTrump = function() {
  for (var i = 0; i < Game.sequenceLengthTrump; i++) {
    Game.sequenceT.push(Game.randomSequenceNumberTrump());
  }

  Game.trump();
};

Game.randomSequenceNumberTrump = function() {
  return Math.round(Math.random() * (Game.gridBase * Game.gridHeight));
};

Game.trump = function() {
  var squares = document.getElementsByTagName('li');
  for (var i = 0; i < Game.sequenceT.length; i++) {
    squares[Game.sequenceT[i]].setAttribute('class', 'trump');
  }
  Game.pointsT();
};

Game.pointsT = function(){
  var pointsT = document.getElementsByClassName('trump');
  for (var i = 0; i < pointsT.length; i++) {
    pointsT[i].addEventListener('click', Game.earnPointsT);
  }
};

Game.earnPointsT = function () {
  
};

// // CLINTON
//
// Game.SequenceClinton = function() {
//   for (var i = 0; i < Game.sequenceLengthClinton; i++) {
//     Game.sequenceC.push(Game.randomSequenceNumberClinton());
//   }
//   console.log(Game.sequenceC);
//   Game.clinton();
// };
//
// Game.randomSequenceNumberClinton = function() {
//   return Math.round(Math.random() * (Game.gridBase * Game.gridHeight));
// };
//
// Game.clinton = function() {
//   var squares = document.getElementsByTagName('li');
//   for (var i = 0; i < Game.sequenceC.length; i++) {
//     squares[Game.sequenceC[i]].className = 'clinton';
//   }
//   // Game.pointsC();
// };
//
// // OBAMA
//
// Game.SequenceObama = function() {
//   for (var i = 0; i < Game.sequenceLengthObama; i++) {
//     Game.sequenceO.push(Game.randomSequenceNumberObama());
//   }
//   console.log(Game.sequenceO);
//   Game.obama();
// };
//
// Game.randomSequenceNumberObama = function() {
//   return Math.round(Math.random() * (Game.gridBase * Game.gridHeight));
// };
//
// Game.obama = function() {
//   var squares = document.getElementsByTagName('li');
//   for (var i = 0; i < Game.sequenceO.length; i++) {
//     squares[Game.sequenceO[i]].className = 'obama';
//   }
//   // Game.pointsO();
// };

document.addEventListener('DOMContentLoaded', Game.start);
// find out why putting this at the top prevents it from running correctly
// check error message that sometimes occurs
