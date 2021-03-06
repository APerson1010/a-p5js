/* global createVector random width height color dist p5 noStroke fill ellipse */

class Cell {
  constructor(pos, r, c) {
    if (pos) {
      this.pos = pos.copy();
    } else {
      this.pos = createVector(random(width), random(height));
    }

    this.r = r || 60;
    this.c = c || color(random(100, 255), 0, random(100, 255), 100);
  }

  clicked(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  mitosis() {
    var cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  }

  move() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}
