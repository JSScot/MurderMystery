/* VARIABLES */
let scene = 0;
//sprites
let one;
let two;
let start;

let sidePic;
let ending;

//text

let opt1=" ";
let opt2=" ";

//pictures
let startB;



/* PRELOAD LOADS FILES */
function preload(){
  startB = loadImage("assets/startButton.png")
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600,400);

  //pitures for each scene
  sidePic = new Sprite (width/2+170,130,200,200,"s")
  sidePic.pos = {x:-400,y:-400}

  //right button
  two = new Sprite (width/2+140,height/2+120,160,50,"s")
  two.pos = {x:-1400,y:-1400}
  two.textSize="15"
 

  //left button
  one = new Sprite (width/2-140,height/2+120,160,50,"s")
  one.pos = {x:-600,y:-600}
  one.textSize="15"

  //ending picture
  ending = new Sprite(width/2,height/2+100,300,80)
  ending.pos = {x:-700,y:-700}
  

  
//start button
  start = new Sprite(startB,width/2,height/2+140,120,50,"s")
  startB.resize(150,100)
  start.text = "Begin"
  start.textSize="20"
  

}

/* DRAW LOOP REPEATS */
function draw() {
  background("green")

  //right button
   one.text = opt2
  //left button
  two.text = opt1

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

  //begins game
  if(start.mouse.presses())
  {
    scene++
    start.pos = {x:-100,y:-100}
    sidePic.pos = {x:width/2+170,y:110}
    one.pos ={x:width/2+160,y:height/2+120}
    two.pos = {x:width/2-160,y:height/2+120}
  }

  if(one.mouse.presses())
  {
    scene*=5;
  }
  if(two.mouse.presses())
  {
    /*if(opt1=="Come back tomorrow")
    {
      scene=2
    }*/
    if(opt1=="Talk to Lucy")
    {
      scene=25
    }
    else
    {
    scene++
    }
    
  }
  print(scene)

  sceneChanger()
}

/* FUNCTIONS */


//changes options, text, and pictures based on scene
function sceneChanger()
{
  if(scene==1)
  {
    
    textAlign(CENTER)
    textSize(20)
    text("You get more information about the case \n from the department. It says how the \n4 victims were all hit in the head \nwith a blunt object. To get more info\n you need to investigate the crime scene\nYou can go right away or wait until\n night time. You decide to:",200,50)
  opt1="Investigate at night"
  opt2="Investigate Now"
    
  }
  else if(scene==2)
  {
    textAlign(CENTER)
      text("You walk into Hope hospital \n it looks old and disordered, as expected.\n It's a large space with a lot of \n ground to cover, but you don't have\n all teh time in the world\n Where is the best place to get some clues?",200,50)
    opt1="The nurse's office"
    opt2="The second floor"
  }
  else if(scene==3)
    {
      textAlign(CENTER)
        text("In the nurse's office, it is almost \ndestroyed with everything in disarray \n But some how a rather clean bookbag and \n a pile of canned beans are \n in the corner of the office\n you then hear a sudden noise from\nsomewhere in the room.\n You decide to:",200,50)
      opt1="Walk towards noise"
      opt2="Take note of evidence\nand leave"
    }
  else if(scene==4)
  {
    youLose()
  }
  else if(scene==5)
  {
    textAlign(CENTER)
      text("You go to the front of the hospital\n and you see Madame Lucy a block\n over with some groceries.\nYou can talk to her to see if \n she knows anything or look for evidence.\n You decide to:",200,50)
    opt1="Look for\nevidence"
    opt2="Talk to Lucy"
  }
  else if(scene==6)
  {
    textAlign(CENTER)
      text("You step into the hospital and \n see a desk in one of the\n rooms on the first floor. You pick up\n a dusty file. You open it to see\n a list of doctors that used to work\n at this hospital before it closed.\n (The list is on your right)\n Now you should:",200,50)
    opt1="Talk to Lucy"
    opt2="Look around more"
  }
  else if(scene==15)
    {
      textAlign(CENTER)
        text("As you leave the hospital you  see\n Old man Bob loitering near the front\n of the hospital. You can ask him why he's \nhere or visit by the hospital tomorrow ",200,50)
      opt1="Come back tomorrow"
      opt2="What is Bob\n doing here?"
    }
  else if (scene==25)
  {
    textAlign(CENTER)
    text("You see Lucy and walk up to her.\n You ask her if she knows anything about the murder ",200,50)
    opt1="Come back tomorrow"
    opt2="What is Bob\n doing here?"
  }
  else if(scene==75)
  {
      textAlign(CENTER)
        text("'Morning detective,' Bob says\n 'I always take my evening walks\n here. I'm the one who reported one of the \nmurders, if you're looking for a suspect, \nsome guy in a brown jacket comes by\n sometimes. He doesn't live around here but\n I always happen to see him' ",200,50)
      opt1="Take note and\n Come back tommorrow"
      opt2="Doubt and \n arrest Bob"
  }
  else if (screen==375)
  {
    youLose()
  }
  
}

//bad endings
function youLose()
{
  //hides options and sidepic
  sidePic.pos = {x:-250,y:-900}
  one.pos ={x:-700,y:-700}
  two.pos = {x:-1999,y:-2000}
  ending.pos = {x:width/2,y:height/2+130}
  if(scene==4)
  {
  textAlign(CENTER)
  text("You walk towards the noise out of curiousity\n Is someone still in here? Does someone live here?\nYou question is answered as someone jumps at you\n and stabs you repeatedly in the chest\n you scream in terror as you became the 5th victim\n You died",width/2,height/2-100)
  }
  if(scene==375)
  {
    textAlign(CENTER)
    text("You arrest Old Man Bob for suspisous behavior\n If murders happen here a lot, why come here everyday?\nIt sounded reasonable to everyone else,\n UNTIL another murder happens a week later.\n Old man Bob is innocent. He sues the department\n and to save face, they fire you",width/2,height/2-100)
  }
 
  
}

