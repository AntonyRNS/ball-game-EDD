import Ball from './Ball.js'
import Team from './Team.js'
import * as utils from './gamesets.js'

// set up canvas
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let balls = []
let team_red = new Team(0, height / 2 - 50, 30, 100, "red")
let team_blue = new Team(width - 30, height / 2 - 50, 30, 100, "blue")

let velocidade_vermelha = 10
let velocidade_azul = 10

const formV = document.querySelector('#red')
formV.addEventListener('submit', (e) => utils.definirTimeVermelho(e, team_red))

const formA = document.querySelector('#blue')
formA.addEventListener('submit', (e) => utils.definirTimeAzul(e, team_blue))

const botaoStart = document.querySelector('#buttonStart')
botaoStart.addEventListener('click', start)

const botaoReset = document.querySelector('#buttonReset')
botaoReset.addEventListener('click', (e) =>
  utils.configuracaoPadrao(e, balls, team_red, team_blue, setVelocidadeVermelha, setVelocidadeAzul)
)

function setVelocidadeVermelha(valor) {
  velocidade_vermelha = valor
}

function setVelocidadeAzul(valor) {
  velocidade_azul = valor
}

function getValues() {
  team_red.balls_count = parseInt(document.querySelector('#qtd-bolas-verm').value)
  team_blue.balls_count = parseInt(document.querySelector('#qtd-bolas-azuis').value)
  velocidade_vermelha = parseInt(document.querySelector('#vlc-bolas-verm').value)
  velocidade_azul = parseInt(document.querySelector('#vlc-bolas-azuis').value)

  document.querySelector('#qtd-bolas-verm').value = 1
  document.querySelector('#qtd-bolas-azuis').value = 1
  document.querySelector('#vlc-bolas-verm').value = 10
  document.querySelector('#vlc-bolas-azuis').value = 10
}

function start() {
  getValues()

  for (let i = 0; i < team_red.balls_count; i++) {
    const size = random(10, 20)
    const ball_red = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      velocidade_vermelha,
      random(-7, 7),
      "red",
      size
    )
    balls.push(ball_red)
  }

  for (let i = 0; i < team_blue.balls_count; i++) {
    const size = random(10, 20)
    const ball_blue = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      velocidade_azul,
      random(-7, 7),
      "blue",
      size
    )
    balls.push(ball_blue)
  }
}

function loop() {
  ctx.fillStyle = "rgba(101, 250, 100, 0.25)"
  ctx.fillRect(0, 0, width, height)
  team_red.draw(ctx)
  team_blue.draw(ctx)
  for (const ball of balls) {
    ball.draw(ctx)
    ball.update(width, height)
    ball.collisionDetect(team_red, team_blue)
  }
  requestAnimationFrame(loop)
}

loop()
