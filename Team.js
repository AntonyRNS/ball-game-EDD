/**
 * É a representação de um time, mostrado como apenas a 'trave'.
 * @class
 * 
 */
export default class Team {

  /**
   * 
   * @param {number} x - Posição horizontal da trave
   * @param {number} w - Largura da trave
   * @param {number} h - Altura da trave
   * @param {string} color - Cor da trave
   */
  constructor(x, y, w, h, color) {
    this.name = color;
    this.x = x;
    this.w = w;
    this.h = h;
    this.color = color;
    this.checarY();
  }

  
  /**
   * Calcula altura certa do Y para que a trave permaneça centralizada na tela
   * @param {number} - Posição vertical da trave.
   */
  checarY() {
    this.y = (window.innerHeight / 2) - (this.h / 2);
  }

  /**
   * Desenha a trave na tela.
   * @param {CanvasRenderingContext2D} ctx - Objeto do canva
   */
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
