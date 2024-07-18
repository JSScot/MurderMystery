/* VARIABLES */
let scene = 0;
//sprites
let one;
let two;
let start;

let sidePic;

//text

let opt1;
let opt2;

//pictures
let startB;



/* PRELOAD LOADS FILES */
function preload(){
  startB = loadImage("assets/startButton.png")
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600,400);

  sidePic = new Sprite (width/2+170,130,200,200,"s")
  sidePic.pos = {x:-400,y:-400}

  //right button
  one = new Sprite (width/2+140,height/2+120,160,80,"s")
  one.pos = {x:-1400,y:-1400}
  one.text =opt1

  //left button
  two = new Sprite (width/2-140,height/2+120,160,80,"s")
  two.pos = {x:-600,y:-600}
  one.text =opt2

  
//start button
  start = new Sprite(startB,width/2,height/2+140,120,50,"s")
  startB.resize(150,100)
  start.text = "Begin"
  start.textSize="20"
  

}

/* DRAW LOOP REPEATS */
function draw() {
  background("green")

  //title screen
  textFont("cursive")
  if(scene == 0)
  {
  textFont("ariel")
  textAlign(CENTER)
  textSize(40)
  text("Horrors At Hope Hospital",width/2,height/2-100)
    textAlign()
    textSize(20)
    text("There has been a series of murders\n at an abandoned hospital in your neiborhood.\nYou are detective Jones\n You hope to bring justice to those\n who died and the victim's families\nand prevent any other murders",width/2,height/2-50)
  }

  
  if(start.mouse.presses())
  {
    scene++
    start.pos = {x:-100,y:-100}
    sidePic.pos = {x:width/2+170,y:110}
    one.pos ={x:width/2+160,y:height/2+120}
    two.pos = {x:width/2-160,y:height/2+120}
  }

  sceneChanger()
}

/* FUNCTIONS */


//changes options, text, and pictures based on scene
function sceneChanger()
{
  if(scene==1)
  {
    
    textAlign(CENTER)
    text("bla bla more bla wrew ewr werewr f gdf \n gtr ht hethrger grwg erger gre ef \n gregreger gerger gregredsddsdfdsf\n gerger ge df sf dsdfds sd\nefdewf few fwef ew fwefwefwef ewf wef \nwe fwef ewfew fwe f e",200,50)
    
  }
  
}