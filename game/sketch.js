let catX = 310;
let catY = 245;
let catSize = 50;
let catSpeed = 5;
let catDir = 1; // 1 = facing right, -1 = facing left
let borderY = 485;
let borderX = 620;
let mouseSize = 10;

let gameState = "START";

function setup() {
  createCanvas(620, 490);
}

function draw() {
  background(0, 0, 255);

  if (gameState == "START") {
    // Rita upp startsidan
    textAlign(CENTER);
    textSize(60);
    text("Katten & Musen", width / 2, 245);
    textSize(26);
    text("Tryck på SPACE för att starta", width / 2, 400);
  } else if (gameState == "PLAY") {
    // Tangentbordsstyrning
    if (keyIsDown(LEFT_ARROW)) {
      catX = catX - catSpeed;
      catDir = -1; // Flip to face left
    }
    if (keyIsDown(RIGHT_ARROW)) {
      catX = catX + catSpeed;
      catDir = 1; // Flip to face right
    }
    if (keyIsDown(DOWN_ARROW)) {
      catY = catY + catSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
      catY = catY - catSpeed;
    }

    // Screen wrapping (teleport to opposite edge)
    if (catY < 0) {
      catY = catY + borderY;
    }
    if (catY > 485) {
      catY = catY - borderY;
    }
    if (catX > 620) {
      catX = catX - borderX;
    }
    if (catX < 0) {
      catX = catX + borderX;
    }

    // Kontrollera avståndet mellan mus och katt
    let d = dist(catX, catY, mouseX, mouseY);

    // Kontrollera om katten har fångat musen
    if (d < catSize / 2 + mouseSize / 2) {
      gameState = "GAMEOVER";
      fill("red");
      circle(mouseX, mouseY, 100);
    }

    // Rita ubåten (använder push/pop för att vända bilden)
    push();
    translate(catX, catY);
    scale(catDir, 1); // Spegelvänd om catDir = -1

    fill("orange");
    triangle(-catSize / 4, 0, -catSize / 2 - 10, -10, -catSize / 2 - 10, 10);
    rect(0, -35, 10, 20);
    ellipse(0, 0, catSize, 35);

    fill("#90D5FF");
    circle(-12, 0, catSize - 40);
    circle(12, 0, catSize - 40);
    circle(0, 0, catSize - 40);
    pop();

    // Musstyrning
    fill("brown");
    circle(mouseX, mouseY, mouseSize);
  } else if (gameState == "GAMEOVER") {
    // When you die
    textSize(60);
    textAlign(CENTER);
    text("YOU DIED", width / 2, 245);
  }
}

function keyPressed() {
  // Starta när man trycker blanksteg
  if (keyCode == 32) {
    gameState = "PLAY";
  }
}