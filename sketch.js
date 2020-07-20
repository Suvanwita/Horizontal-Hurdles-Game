var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
function preload(){
  car1Img=loadImage("../PLAYER.jfif");
  car2Img=loadImage("../PLAYER.jfif");
  car3Img=loadImage("../PLAYER.jfif");
  car4Img=loadImage("../PLAYER.jfif");
  //groundImg=loadImage("../PLAYER.jfif");
  trackImg=loadImage("../images/track.jpg");
  
}


function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
