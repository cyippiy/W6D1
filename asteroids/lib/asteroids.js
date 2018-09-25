const MovingObject = require("./moving_object.js");

function Asteroid(pos){
  this.COLOR = "grey";
  this.RADIUS = 5;
  MovingObject.call()
  
}



window.MovingObject = MovingObject;

const canvasEl = document.getElementById("game-canvas");
const ctx = canvasEl.getContext("2d");
const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

mo.draw(ctx);
mo.move();
mo.draw(ctx);