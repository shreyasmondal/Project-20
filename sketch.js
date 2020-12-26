var car, wall, speed, weight



function setup() {
  createCanvas(1600, 400);

  weight = random(400, 1500)
  speed = random(30, 100)

  car = createSprite(10, 200, 50, 20);
  car.shapeColor = "white"
  car.velocityX = speed

  wall = createSprite(1550, 200, 60, height / 2)
  wall.shapeColor = "brown"
}

function draw() {
  background(0);
  drawSprites();


  if (wall.x - car.x < car.width / 2 + car.width / 2) {
    car.velocityX = 0

    var deformation = (0.5 * weight * speed * speed) / 22500

    if(deformation<100){
      car.shapeColor = color(0,255,0)
    }

    if (deformation<180 && deformation>100) {
      car.shapeColor = "yellow"
    }

    if (deformation>180) {
      car.shapeColor = "red"
    }
  }
}