var car, wall;
var speed, weight;

function setup() {
  createCanvas(800, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(0, 200, 50, 50);
  wall = createSprite(800, 100, 100, 800);
}

function draw() {
  background(0);
  drawSprites();
  car.velocityX = speed;

  if (
    wall.x - car.x < wall.width / 2 + car.width / 2 &&
    car.x - wall.x < wall.width / 2 + car.width / 2 &&
    wall.y - car.y < wall.width / 2 + car.width / 2 &&
    car.y - wall.y < wall.width / 2 + car.width / 2
  ) {
    background(255, 255, 0);
  }
}
