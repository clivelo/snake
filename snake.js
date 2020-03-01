class Snake {

  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.direction = 'r';
    this.dx = pixel;
    this.dy = 0;
    this.turning = false;
    this.len = 4;
    this.body = new Array(this.len);
    for (var i = 0; i < this.len; i++) {
      this.body[i] = [this.x - i * pixel, this.y];
    }
  }

  show() {
    fill(255);
    for (var i = 0; i < this.len; i++) {
      rect(this.body[i][0], this.body[i][1], pixel, pixel);
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy
    this.body.unshift([this.x, this.y]);
    this.body.pop();
    this.turning = false;
  }

  changeDirection() {
    if (this.direction == 'u') {
      snake.dx = 0;
      snake.dy = -pixel;
    }
    if (this.direction == 'd') {
      snake.dx = 0;
      snake.dy = pixel;
    }
    if (this.direction == 'l') {
      snake.dx = -pixel;
      snake.dy = 0;
    }
    if (this.direction == 'r') {
      snake.dx = pixel;
      snake.dy = 0;
    }
  }

  foodCheck() {
    if (this.body[0][0] == food.x && this.body[0][1] == food.y) {
      this.len++;
      this.body.unshift([this.x, this.y]);
      food.moveFood();
    }
  }

  winCheck() {
    return snake.len >= (width / pixel * height / pixel);
  }

  loseCheck() {
    if (this.body[0][0] < 0 || this.body[0][0] >= width ||
      this.body[0][1] < 0 || this.body[0][1] >= height) {
      return true;
    }
    for (var i = 2; i < this.len; i++) {
      if (this.body[0][0] == this.body[i][0] && this.body[0][1] == this.body[i][1]) {
        return true;
      }
    }
    return false;
  }
}