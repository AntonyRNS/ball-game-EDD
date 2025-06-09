export default class Team {
  constructor(x, y, w, h, color) {
    this.name = color;
    this.x = x;
    this.w = w;
    this.h = h;
    this.color = color;
    this.checarY();
  }

  checarY() {
    this.y = (window.innerHeight / 2) - (this.h / 2);
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
