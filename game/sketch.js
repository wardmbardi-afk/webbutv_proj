let carX = 200;
let carY = 300; 
let carWidth = 35;
let carHeight = 60;
let carSpeed = 5;

let enemyX = 100;
let enemyY = -60;
let enemyWidth = 35;
let enemyHeight = 60;
let enemySpeed = 4;
let carColors = ['green', 'purple' , 'orange' , 'pink' ,'cyan'];
let enemyColor = 'red';

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
  fill(200,0,0); // Röd färg för sidan bilen 
  rect(carX, carY, carWidth, carHeight-15, 5);
  fill(160,0,0); //Röd färg för taket bilen
  rect(carX, carY, carWidth, carHeight-40, 5)
  fill(255, 255, 0); // Gul färg för strålkastare
  rect(carX + 2, carY + carHeight - 10, 10, 5); // Vänster strålkastare
  rect(carX + carWidth - 12, carY + carHeight - 10, 10, 5); // Höger strålkastare
  fill(0,0,255); // Blå färg för bakljus
  rect(carX+4, carY+22, carWidth-8, carHeight-40, 5); // Vänster bakljus
  


  // Flytta bilen med piltangenterna
  if (keyIsDown(LEFT_ARROW) && carX > 20) {
    carX -= carSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) && carX < width - carWidth - 20) {
    carX += carSpeed;
  }   
  // --- FLYTTA OCH RITA MÖTANDE BIL ---
  enemyY = enemyY + enemySpeed;
  // Om bilen åker utanför botten, börja om längst upp
  if (enemyY > height) {
    enemyY = -enemyHeight;
    enemyX = random(40, width - 40 - enemyWidth);

    enemyColor = random(carColors);
  }

  // Rita mötande bil 
  fill(enemyColor);
  rect(enemyX, enemyY, enemyWidth, enemyHeight, 5);
  fill(255, 255, 255); // Vit färg för strålkastare
  rect(enemyX + 2, enemyY + enemyHeight - 10, 10, 5); // Vänster strålkastare
  rect(enemyX + enemyWidth - 12, enemyY + enemyHeight - 10, 10, 5); // Höger strålkastare
  fill(enemyColor-40,0,255); // Blå färg för bakljus
  rect(enemyX+4, enemyY+22, enemyWidth-8, enemyHeight-40, 5); // Vänster bakljus
  fill(enemyColor-0,0,0,55);
  rect(enemyX, enemyY, enemyWidth, enemyHeight-15, 5);
  fill(enemyColor-0,0,0,95);
  rect(enemyX, enemyY, enemyWidth, enemyHeight-40, 5);

}
