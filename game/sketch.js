let catX=310;
let catY=245;
let catSize=10;
let catSpeed=20;
let borderY=485;
let borderX=620;
let mouseSize=10;


let gameState= "START"
function setup() {
  createCanvas(620, 490);
}

function draw() { 
  background(0, 0, 255 );

if(gameState=="START"){
  //rita upp startsidan
  textAlign(CENTER);
  textSize(60);
  text("Katten & Musen",width/2,245 );
  textSize(26);
  text("Tryck på SPACE för att starta ",width/2,400);
} 

else if(gameState=="PLAY"){
  //spela spelet
  //tangentborddstayring 
if(keyIsDown(LEFT_ARROW)){
    catX=(catX-catSpeed)
  }
  
if(keyIsDown(RIGHT_ARROW)){
    catX=(catX+catSpeed)
  }
  
if(keyIsDown(DOWN_ARROW)){
    catY=(catY+catSpeed)
  }
  
if(keyIsDown(UP_ARROW)){
    catY=(catY-catSpeed)
  }
  
if (catY < 0) {
  catY=(catY+borderY);
}
if(catY >485){
  catY=(catY-borderY)
}
if(catX >620){
  catX=(catX-borderX)
}
if(catX <0){
  catX=(catX+borderX)
}
   //kontollera avståndet mellan mus och katt 
  let d = dist(catX, catY, mouseX, mouseY);
//kontrollera om katten har fångat musen
if (d<(catSize/2+mouseSize/2)){
  gameState="GAMEOVER"
  fill("red");
  circle(mouseX,mouseY,100);
}
  fill ("black");
  circle (catX, catY, catSize);

  //Musstyrning
  fill('brown');
  circle(mouseX, mouseY, mouseSize);
  
}

else if(gameState=="GAMEOVER"){
  //when you die
  textSize(60);
  text("Fuck you",width/2,245 );
}


  
}
function keyPressed(){
  //starata när man tryker blanksteg
  if(keyCode==32){
    gameState="PLAY";
  }
}