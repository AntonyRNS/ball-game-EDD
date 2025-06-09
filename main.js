import Ball from './Ball.js'

// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}







class Team {
  constructor(x, y, w, h, color) {
    this.name = color
    this.x = x
    this.w = w
    this.h = h
    this.color = color
    this.checarY()
  }
  checarY() {
    this.y = (canvas.height / 2) - (this.h / 2)
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

const balls = [];
let team_red = new Team(0, height / 2 - 50, 30, 100, "red")
let team_blue = new Team(width - 30, height / 2 - 50, 30, 100, "blue")

const formV = document.querySelector('#red')
formV.addEventListener('submit', definirTimeVermelho)

const formA = document.querySelector('#blue')
formA.addEventListener('submit', definirTimeAzul)


function definirTimeVermelho(event) {
  event.preventDefault();
  let alturaVermelho = parseInt(document.querySelector('#input-trave-verm').value)
  team_red.h = alturaVermelho
  team_red.checarY()
}

function definirTimeAzul(event) {
  event.preventDefault();
  let alturaAzul = parseInt(document.querySelector('#input-trave-azul').value)
  team_blue.h = alturaAzul
  team_blue.checarY()
}

const botaoStart = document.querySelector('#buttonStart')
botaoStart.addEventListener('click', start)

function start() {
  team_red.balls_count = parseInt(document.querySelector('#qtd-bolas-verm').value)
  team_blue.balls_count = parseInt(document.querySelector('#qtd-bolas-azuis').value)
  let velocidade_vermelha = parseInt(document.querySelector('#vlc-bolas-verm').value)
  let velocidade_azul = parseInt(document.querySelector('#vlc-bolas-azuis').value)


  for (let i = 0; i < team_red.balls_count; i++) {
    const size = random(10, 20);
    const ball_red = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      velocidade_vermelha,
      random(-7, 7),
      "red",
      size
    );
    balls.push(ball_red);
  }
  for (let i = 0; i < team_blue.balls_count; i++) {
    const size = random(10, 20);
    const ball_blue = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      velocidade_azul,
      random(-7, 7),
      "blue",
      size
    );
    balls.push(ball_blue);
  }

}



function loop() {
  ctx.fillStyle = "rgba(101, 250, 100, 0.25)";
  ctx.fillRect(0, 0, width, height);

  team_red.draw(ctx)

  team_blue.draw(ctx)

  for (const ball of balls) {
    ball.draw(ctx);
    ball.update(width, height);
    ball.collisionDetect(team_red, team_blue);
  }
  requestAnimationFrame(loop);
}

loop();
