let carX = 133;
let carY = 400; 
let carWidth = 35;
let carHeight = 60;
let carSpeed = 5;

let enemyX = 100;
let enemyY = -60;
let enemyWidth = 35;
let enemyHeight = 60;
let enemySpeed = 4;
let carColors = ['green', 'purple', 'orange', 'pink', 'cyan'];
let enemyColor = 'red';
let lineY = -60;

let score = 0;
let highScore = 0; // Sparar ditt bästa resultat
let gameState = 'menu'; // 'menu', 'PLAY', 'gameover'

function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(50); // Mörkgrå asfalt 
  noStroke();

  if (gameState === "menu") {
    fill(255);
    rect(0, 0, width, height);
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Click or press ENTER to start", width / 2, height / 2);

  
  } 
  else if (gameState === "PLAY") {
    // Flytta och rita vägmarkeringar
    lineY += enemySpeed;
    if (lineY >= 0) {
      lineY = -40;
    }
    fill(255);
    for (let i = lineY; i < height; i += 40) {
      rect(145, i, 10, 20);
    }

    // Rita gräset
    fill(34, 139, 34);
    rect(0, 0, 20, height);
    rect(width - 20, 0, 20, height);

    // Rita spelarens bil
    fill(255, 0, 0);
    rect(carX, carY, carWidth, carHeight, 5);
    fill(200, 0, 0);
    rect(carX, carY, carWidth, carHeight - 15, 5);
    fill(160, 0, 0);
    rect(carX, carY, carWidth, carHeight - 40, 5);
    fill(255, 255, 0);
    rect(carX + 2, carY + carHeight - 10, 10, 5);
    rect(carX + carWidth - 12, carY + carHeight - 10, 10, 5);
    fill(0, 0, 255);
    rect(carX + 4, carY + 22, carWidth - 8, carHeight - 40, 5);

    // Styr bilen med piltangenterna
    if (keyIsDown(LEFT_ARROW) && carX > 20) {
      carX -= carSpeed;
    }
    if (keyIsDown(RIGHT_ARROW) && carX < width - carWidth - 20) {
      carX += carSpeed;
    }   

    // Flytta mötande bil och öka farten vid poäng
    enemyY = enemyY + enemySpeed;
    if (enemyY > height) {
      enemyY = -enemyHeight;
      enemyX = random(40, width - 40 - enemyWidth);
      enemyColor = random(carColors);
      score += 1;
      enemySpeed += 0.25; // Ökar farten på både bil och vägmarkeringar
    }

    // Rita mötande bil 
    fill(enemyColor);
    rect(enemyX, enemyY, enemyWidth, enemyHeight, 5);
    fill(255, 255, 255);
    rect(enemyX + 2, enemyY + enemyHeight - 10, 10, 5);
    rect(enemyX + enemyWidth - 12, enemyY + enemyHeight - 10, 10, 5);
    fill(0, 0, 255);
    rect(enemyX + 4, enemyY + 22, enemyWidth - 8, enemyHeight - 40, 5);
    fill(0, 0, 0, 55);
    rect(enemyX, enemyY, enemyWidth, enemyHeight - 15, 5);
    fill(0, 0, 0, 95);
    rect(enemyX, enemyY, enemyWidth, enemyHeight - 40, 5);

    // Visa poängen
    fill(255);
    textSize(18);
    textAlign(LEFT, TOP);
    text("Poäng: " + score, 30, 15);

    // Kolla kollision
    if (
      carX < enemyX + enemyWidth &&
      carX + carWidth > enemyX &&
      carY < enemyY + enemyHeight &&
      carY + carHeight > enemyY
    ) {
      // Uppdatera highscore om nuvarande poäng är högre
      if (score > highScore) {
        highScore = score;
      }
      gameState = "gameover";
    }
  }
  else if (gameState === "gameover") {
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2 - 50);
    
    textSize(20);
    text("Slutpoäng: " + score, width / 2, height / 2 - 5);

    fill(255, 215, 0); // Guldgul text för highscore
    text("Highscore: " + highScore, width / 2, height / 2 + 25);

    fill(255);
    textSize(13);
    text("Klicka eller tryck ENTER för att spela igen", width / 2, height / 2 + 65);

  }
}

// Startar eller startar om med ENTER eller mellanslag
function keyPressed() {
  if (keyCode === ENTER || key === ' ' || keyCode === 32) {
    if (gameState === "menu") {
      gameState = "PLAY";
    } else if (gameState === "gameover") {
      resetGame();
    }
  }
}

function resetGame() {
  carX = 133;
  carY = 400;
  enemyY = -60;
  enemyX = random(40, width - 40 - enemyWidth);
  enemySpeed = 4; // Återställer farten till startvärdet
  score = 0;
  gameState = "PLAY";
}