const pixel = 10;

function setup() {
  createCanvas(400, 400);
  frameRate(15);
  snake = new Snake();
  food = new Food();
}

function draw() {
  background(0);
  snake.move();
  snake.show();
  food.show();
  snake.foodCheck();
  if (snake.winCheck()) {
    fill(20, 200, 20);
    textSize(24);
    textAlign(CENTER);
    text("Congrats, You Won!\nPress SPACE to restart.", width / 2, height / 2);
    noLoop();
  } else if (snake.loseCheck()) {
    fill(200, 20, 20);
    textSize(24);
    textAlign(CENTER);
    text("You lost.\nPress SPACE to restart.", width / 2, height / 2);
    noLoop();
  }
}

function keyPressed() {
  if (!snake.turning) {
    snake.turning = true;
    if (keyCode == UP_ARROW) {
      if (snake.direction != 'd') {
        snake.direction = 'u';
        snake.changeDirection();
      }
    }
    if (keyCode == DOWN_ARROW) {
      if (snake.direction != 'u') {
        snake.direction = 'd';
        snake.changeDirection();
      }
    }
    if (keyCode == LEFT_ARROW) {
      if (snake.direction != 'r') {
        snake.direction = 'l';
        snake.changeDirection();
      }
    }
    if (keyCode == RIGHT_ARROW) {
      if (snake.direction != 'l') {
        snake.direction = 'r';
        snake.changeDirection();
      }
    }
  }
  if (key == ' ') {
    reset();
  }
}

function reset() {
  snake = new Snake();
  food = new Food();
  loop();
}