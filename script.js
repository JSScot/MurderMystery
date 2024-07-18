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
let optButton



/* PRELOAD LOADS FILES */
function preload(){
  startB = loadImage("assets/startButton.png")
  optButton=loadImage("assets/optButton.png")
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600,400);

  //pitures for each scene
  sidePic = new Sprite (width/2+170,130,200,200,"s")
  sidePic.pos = {x:-400,y:-400}

  //right button
  two = new Sprite (optButton,width/2+140,height/2+120,160,50,"s")
  two.pos = {x:-1400,y:-1400}
  two.textSize="15"

  optButton.resize(260,200)
 

  //left button
  one = new Sprite (optButton,width/2-140,height/2+120,160,50,"s")
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
  textFont("georgia")
  if(scene == 0)
  {
  textFont("ariel")
  textAlign(CENTER)
  textSize(40)
  text("Horrors At Hope Hospital",width/2,height/2-100)
    textAlign()
    textSize(20)
    text("There has been a series of murders\n at an abandoned hospital in your neiborhood.\nYou are detective Jones.\n You hope to bring justice to those\n who died and the victim's families\nand prevent any other murders.",width/2,height/2-50)
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
    //loops back to other scenes
    if(opt1=="Come back tomorrow" || opt1=="Take note and\n Come back tommorrow")
    {
      scene=5
    }
    else if(opt1=="Talk to Lucy")
    {
      scene=25
    }
    else if(opt1=="Confront\nArrest Bob")
    {
      scene=375
    }
    else if(opt1=="Leave to find\n more evidence")
      {
        scene=30
      }
    else//next scene
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
  //options and scenes (in numerical order)
  if(scene==1)
  {
    
    textAlign(CENTER)
    textSize(19)
    text("You get more information about the case \n from the department. It says how the \n4 victims were stabbed to dead by a\n specific knife. To get more info\n you need to investigate the crime scene\nYou can go right away or wait until\n night time. You decide to:",200,50)
  opt1="Investigate at night"
  opt2="Investigate Now"
    
  }
  else if(scene==2)
  {
    textAlign(CENTER)//night
    textSize(17)
      text("You walk into Hope hospital \n it looks old and disordered, as expected.\n It's a large space with a lot of \n ground to cover, but you don't have\n all the time in the world\n Where is the best place to get some clues?",200,50)
    opt1="The nurse's office"
    opt2="The second floor"
  }
  else if(scene==3)
    {
      textAlign(CENTER)//nurse office
        text("In the nurse's office, it is almost \ndestroyed with everything in disarray \n But somehow a rather clean bookbag\n full of pictures of nature, a survival knife,\n and a picture of a blonde woman.\n It also seems like someone lives here.\n You then hear a sudden noise from\nsomewhere in the room.\n You decide to:",200,50)
      opt1="Walk towards noise"
      opt2="Take note of evidence\nand leave"
    }
  else if(scene==4)
  {
    youLose()
  }
  else if(scene==5)//sees madame lucy
  {
    textAlign(CENTER)
      text("You go to the front of the hospital\n and you see Madame Lucy a block\n over with some groceries.\nYou can talk to her to see if \n she knows anything or look for evidence.\n You decide to:",200,50)
    opt1="Look for\nevidence"
    opt2="Talk to Lucy"
  }
  else if(scene==6)//morning
  {
    textAlign(CENTER)
      text("You step into the hospital and \n see a desk in one of the\n rooms on the first floor. You pick up\n a dusty file. You open it to see\n a list of doctors that used to work\n at this hospital before it closed.\n (The list is on your right)\n Now you should:",200,50)
    opt1="Talk to Lucy"
    opt2="Look around more"
  }
  else if(scene==10)
  {
    youLose()
  }
  else if(scene==15)// Spots bob
    {
      textAlign(CENTER)
        text("As you leave the hospital you  see\n Old man Bob loitering near the front\n of the hospital. You can ask him why he's \nhere or visit by the hospital tomorrow. ",200,50)
      opt1="Come back tomorrow"
      opt2="What is Bob\n doing here?"
    }
  else if (scene==25)//Madame Lucy
  {
    textAlign(CENTER)
    text("You see Lucy and walk up to her.\n You ask her if she knows anything about\n the murder. She says 'Oh I don't know,\n haven't been thinking about it much\n I'm still saddened my ex-husband leaving\n here after he lost his job. If I had \nto guess, it's probably Old Man Bob\n He always goes on 'nightly walks' \n why would an old man walk by a\n scary place at NIGHT?' ",200,50)
    opt1="Confront\nArrest Bob"
    opt2="Ask about\n Ex husband"
  }
  else if(scene==30)
  {
    textAlign(CENTER)//too much investigation
      text("You look around for more clues but don't \nfind much. You start to get a bit tired and \ngo home. You slowly start to get paranoid\n about the case.What if the murderer knows \nyour working on the case and murders \nyou next! You can't stop now! Or can you?\n Yea you're a detective but\n maybe some other detective can solve it\nwhile you stay safe. ",200,50)
    opt1="Pull all nighter\n and connect clues"
    opt2="Give up on\n case"
  }
  else if(scene==31)
  {
    youLose()
  }
  else if(scene==75)//Bob talks
  {
      textAlign(CENTER)
        text("'Morning detective,' Bob says\n 'I always take my evening walks\n here. I'm the one who reported one of the \nmurders. If you're looking for a suspect, \nsome guy in a brown jacket comes by\n sometimes. He doesn't live around here but\n I always happen to see him recently'\n Be on the look out ya hear. ",200,50)
      opt1="Take note and\n Come back tommorrow"
      opt2="Doubt and \n arrest Bob"
  }
  else if(scene==125)//Jack
  {
    textAlign(CENTER)
      text("She tells you that she last saw him\n outside the grocery store she came from.\n You go there to see him talking to someone.\n You interrupt him to ask him about \nthe murders 'What a tragety. I just heard \nabout them since I came to visit.' he says.\n' Lucy told me, although she doesn't seem\n too saddened about it. Its almost as if \nshe wished this investigation stopped'",200,50)
    opt1="Search him"
    opt2="Arrest \n Madame Lucy"
  }
  else if(scene==126)
  {
    textAlign(CENTER)
      text("You've never seen this man before\n so you ask for his ID for \n more info about him.'Oh, I left this town\n for a while. Been traveling the world\n and such ' He give you his ID\n (shown on the right).\n I'd show you pictures but I lost my bag at home\n Now if you'll excuse me, I'm in \n the middle of a conversation",200,50)
    opt1="Leave to find\n more evidence"
    opt2="Arrest \n Jack"
  }
  else if(scene==150)
  {
    youLose()
   }
  else if (scene==375)
  {
    youLose()
  }
  else if(scene==625)
  {
    youLose()
  }
  else if(scene==630)
  {
    youWin()
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
    //getting killed
  textAlign(CENTER)
  text("You walk towards the noise out of curiousity\n Is someone still in here? Does someone live here?\nYou question is answered as someone jumps at you\n and stabs you repeatedly in the chest\n you scream in terror as you became the 5th victim\n You died",width/2,height/2-100)
  }
  //give up on case
  if(scene==150)
  {
    textAlign(CENTER)
    text("You gave up on the case. A week later\n someone is murdered again. They were able\nTo catch the murderer this time, but you feel\n terrible. The fifth victim could have been alive\n if you didn't give up so easily. They probably had hope\n that you would solve it. Maybe if you took a better approach\n they would still be here.\n You also got fired 3 months later :P",width/2,height/2-150)
  }
  //arrest innocent people
  if(scene==375)
  {
    textAlign(CENTER)
    text("You arrest Old Man Bob for suspisous behavior\n If murders happen here a lot, why come here every day?\nIt sounded reasonable to everyone else,\n UNTIL another murder happens a week later.\n Old man Bob is innocent. He sues the department\n and to save face, they fire you",width/2,height/2-100)
  }
  if(scene==10)
  {
    textAlign(CENTER)
    text("You go upstairs to the second floor\nAs you walk into the first room the floor beneath you\n starts to crack and break. You fall through the floor\n and shatter your ankles.\n You cannot continue this investigation, nor\n work as a detective for months. As\n you hear about each new victim of the murders\n you roll your eyes. The murderer is considered lucky\n you can't catch them right now. ",width/2,height/2-170)
  }
  if(scene==31)
  {
    textAlign(CENTER)
    text("You pull an all nighter but fell asleep immediately\n You wake up and see that half the evidence you\n had is covered in drool. Dang it\n You couldn't be bothered with\n this case or this job anymore and quit\n This was way too stressful anyways\n  you took the best nap of your life\n but at what cost. ",width/2,height/2-150)
  }
  if(scene==625)
  {
    textAlign(CENTER)
    text("You arrest Lucy for her potential\n involvement with the murders. She complained\n how showing not that much interest means \n nothing, but you beg to differ.\n A week later, another murder happens, meaning Lucy didn't \n do it. She sues the department and of course\n you get fired. You hope to get your job\n back one day but that NEVER gunna happen lol",width/2,height/2-150)
  }
 
  
}

function youWin()
{
  //hides options and sidepic
  sidePic.pos = {x:-250,y:-900}
  one.pos ={x:-700,y:-700}
  two.pos = {x:-1999,y:-2000}
  ending.pos = {x:width/2,y:height/2+130}
  if(scene==4)
    
    textAlign(CENTER)
  textSize(16)
    text("You arrested Jack. He's shocked by your actions.\n He swears he did nothing wrong, but you beg to differ.\n All clues point to Jack unfortunately.\n He is tried in court and he admits\n to luring people to the hospital to\n kill them. 'They fired me from that hospital 2 months\n before they closed down.'said Jack. 'They said they got reports \n of me being too 'crazy' to care for patients\n So I showed this town how crazy I\n can be. Oh and traveling is just my side hobby :3'\n You don't remember caring bout his side hobby.\n Anyways, GOOD JOB. You did it detective. You got a raise.",width/2,height/2-167)
    
}

