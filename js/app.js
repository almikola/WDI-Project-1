var Game = Game || {};

Game.gridBase                   = 4;
Game.gridHeight                 = 3;
Game.counter                    = 20;
Game.width                      = 600;
Game.height                     = 400;
Game.politicians                = ['trump','trump', 'trump', 'trump', 'clinton', 'obama'];
Game.soundbitesT                = ['blast', 'fantastic', 'dream',       'want_some'];
Game.soundbitesH                = ['sue', 'beautiful'];
Game.soundbitesO                = ['success'];
Game.seconds                    = 1000;

Game.setup = function() {
  Game.level = document.getElementById('level');
  Game.level.innerHTML = 1;
  Game.score = document.getElementById('score');
  Game.score.innerHTML = 0;
  Game.lives = document.getElementById('lives');
  Game.lives.innerHTML = 3;
  Game.createGrid();
  $('#button').on('click', this.setTimer.bind(this));
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
};

Game.setTimer = function() {
  $('#button').hide();
  var interval = setInterval(function(){
    Game.counter--;
    if (Game.counter >= 0) {
      var span = document.getElementById('timer');
      span.innerHTML = 'Time left: ' + Game.counter;
      Game.displayMole();
    }
    if (Game.counter === 0) {
      alert('Sorry, times up!');
      clearInterval(interval);
      Game.nextLevel();
    }
    if (parseInt(Game.lives.innerHTML) === 0) {
      alert('Sorry, you died!');
      clearInterval(interval);
    }
  }, Game.seconds);
};

Game.checkForPoints = function() {
  if ($(this).attr('class') === 'trump') {
    Game.score.innerHTML = parseInt(Game.score.innerHTML) + 10;
    var fileNameT =  Game.soundbitesT[Math.floor(Math.random()*Game.soundbitesT.length)];
    new Audio('file:///Users/almikola/development/WDI-Project-1/soundbites/' + fileNameT + '.mp3').play();
  } else if ($(this).attr('class') === 'clinton') {
    Game.score.innerHTML = parseInt(Game.score.innerHTML) - 10;
    var fileNameH = Game.soundbitesH[Math.floor(Math.random()*Game.soundbitesH.length)];
    new Audio('file:///Users/almikola/development/WDI-Project-1/soundbites/' + fileNameH + '.mp3').play();
  } else if ($(this).attr('class') === 'obama') {
    Game.lives.innerHTML = parseInt(Game.lives.innerHTML) - 1;
    Game.counter+=5;
    // Game.checkLives();
    var fileNameO = Game.soundbitesO[Math.floor(Math.random()*Game.soundbitesO.length)];
    new Audio('file:///Users/almikola/development/WDI-Project-1/soundbites/' + fileNameO + '.mp3').play();
  }
};

Game.nextLevel = function() {
  Game.counter = 20;
  Game.level.innerHTML = parseInt(Game.level.innerHTML) + 1;
  Game.seconds -= 250;
  $('#button').show();
  $('li').removeClass();
};

Game.displayMole = function() {
  $('li').removeClass();
  var lis = document.getElementsByTagName('li');
  var randomLi = Math.floor(Math.random() * lis.length);
  var randomPolitician = Math.floor(Math.random() * Game.politicians.length);
  lis[randomLi].setAttribute('class', Game.politicians[randomPolitician]);
};

document.addEventListener('DOMContentLoaded', Game.setup.bind(Game));
