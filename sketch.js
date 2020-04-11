function setup() {
  createCanvas(1280,607);

  value = 0;
  value2 = 255;
  size = 14;
  size2 = 1;
   
  wall1 = createSprite(630,540,500,450);
  wall2 = createSprite(630,290,250,225);
  wall3 = createSprite(630,120,125,115);
  wall4 = createSprite(190,440,125,500);
  wall5 = createSprite(190,200,300,100);
  wall6 = createSprite(1070,440,125,500);
  wall7 = createSprite(1070,200,300,100);
  wall8 = createSprite(960,126,80,50);
  wall9 = createSprite(1180,126,80,50);
  wall10 = createSprite(1070,126,80,50);
  wall11 = createSprite(300,126,80,50);
  wall12 = createSprite(80,126,80,50);
  wall13 = createSprite(190,126,80,50);

  
  wall1.shapeColor = "goldenrod"
  wall2.shapeColor = "goldenrod"
  wall3.shapeColor = "goldenrod"
  wall4.shapeColor = "goldenrod"
  wall5.shapeColor = "goldenrod"
  wall6.shapeColor = "goldenrod"
  wall7.shapeColor = "goldenrod"
  wall8.shapeColor = "goldenrod"
  wall9.shapeColor = "goldenrod"
  wall10.shapeColor = "goldenrod"
  wall11.shapeColor = "goldenrod"
  wall12.shapeColor = "goldenrod"
  wall13.shapeColor = "goldenrod"

  w1 = createSprite(792,400,100,100);
  w2 = createSprite(470,400,100,100);
  w3 = createSprite(630,260,165,100);
  w4 = createSprite(630,121,70,70);
 
  w1.shapeColor = "dodgerblue"
  w2.shapeColor = "dodgerblue"
  w3.shapeColor = "dodgerblue"
  w4.shapeColor = "dodgerblue"

}

function draw() {
  background("white");  

  console.log(mouseX);
  drawSprites();

  fill(value);
  rect(550,450,150,200);

  fill(value2);
  textSize(14);
  text("Click",610,500);

  fill(value2);
  textSize(14)
  text("To",615,520);

  fill(value2);
  textSize(14);
  text("Open/Close",590,540);
  
  //fill(value2);
  //textSize(size);
  //text("Open",610,540);

}

function mouseClicked() {
  if (value === 0 && value2 === 255/*&& size === 14 && size2 === 1*/) {
    value = 255;
    value2 = 0;
   // size = 1;
   // size2 = 14;
  } else {
    value = 0;
    value2 = 255;
    //size = 14;
    //size = 1;
  }
}