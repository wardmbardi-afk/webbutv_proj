 // Variabler för din bil
let carX = 200;
let carY = 300; 
let carWidth = 35;
let carHeight = 60;
let carSpeed = 5;

let carBlueX;
let carBlueY= 100;
let carBlueWidth = 35;
let carBlueHeight = 60;
let carBlueSpeed = 5;

function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(50); // Mörkgrå asfalt 
  noStroke();
  // Rita vägmarkeringar
  fill(255);
  for (let i = 0; i < height; i += 40) {
    rect(145, i, 10, 20);
  }
  // Rita gräset
  fill(34, 139, 34); // Grön färg för gräs
  rect(0, 0, 20, height); // Vänster gräs
  rect(width - 20, 0, 20, height); // Höger gräs
  
  

  // Rita bilen
  fill(255, 0, 0); // Röd färg för bilen
  rect(carX, carY, carWidth, carHeight, 5);
  fill(200,0,0);
  rect(carX, carY, carWidth, carHeight-15, 5);
  fill(180,0,0);
  rect(carX, carY, carWidth, carHeight-40, 5)
  fill(255, 255, 0); // Gul färg för strålkastare
  rect(carX + 2, carY + carHeight - 10, 10, 5); // Vänster strålkastare
  rect(carX + carWidth - 12, carY + carHeight - 10, 10, 5); // Höger strålkastare
  fill(0,0,255); // Blå färg för bakljus
  rect(carX+4, carY+20, carWidth-8, carHeight-40, 5); // Vänster bakljus
  


  // Flytta bilen med piltangenterna
  if (keyIsDown(LEFT_ARROW) && carX > 20) {
    carX -= carSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) && carX < width - carWidth - 20) {
    carX += carSpeed;
  }   
  if (keyIsDown(UP_ARROW) && carY > 0) {
    carY -= carSpeed;
  }
  if (keyIsDown(DOWN_ARROW) && carY < height - carHeight) {
    carY += carSpeed;
  }
 
}
