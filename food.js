class Food {

  constructor() {
    this.x = floor(random(0, width / pixel)) * 10;
    this.y = floor(random(0, height / pixel)) * 10;
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, pixel, pixel);
  }

  moveFood() {
    let overlap = false;
    do {
      this.x = floor(random(0, width / pixel)) * 10;
      this.y = floor(random(0, height / pixel)) * 10;
      for (var i = 0; i < snake.len; i++) {
        if (this.x == snake.body[i][0] && this.y == snake.body[i][1]) {
          overlap = true;
          break;
        }
      }
    } while (overlap);
  }
}