var Game = Game || {};

Game.gridBase                   = 4;
Game.gridHeight                 = 3;
Game.width                      = 800;
Game.height                     = 600;
Game.politicians                = ['trump', 'clinton', 'obama'];
var interval;

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
    Game.checkLives = function() {
      if (Game.lives === 0) {
        // clearInterval(interval);
      }
    };
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
  var counter = 10;
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
};

Game.displayMole = function() {
  $('li').removeClass();
  var lis = document.getElementsByTagName('li');
  var randomLi = Math.floor(Math.random() * lis.length);
  var randomPolitician = Math.floor(Math.random() * Game.politicians.length);
  lis[randomLi].setAttribute('class', Game.politicians[randomPolitician]);
};

document.addEventListener('DOMContentLoaded', Game.start);
