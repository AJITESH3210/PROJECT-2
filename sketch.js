//BOOST YOUR CONCENTRATION APP
//Made by J AJITESH

//Declaring the variables
var ball1, ball2, ball3, ball4, ball5;
var ball6, ball7, ball8, ball9, ball10;

//Setup function
function setup() {

  //Creating the canvas and giving its size
  createCanvas(displayWidth-30, displayHeight-30);

  title = createElement("h1");
  title.position(displayWidth/2 - 220, displayHeight/2 + 100);
  title.html("BOOST YOUR CONCENTRATION");

  appImg = createElement("img");
  appImg.position(displayWidth/2 - 300, displayHeight/2 - 200);
  appImg.elt.src = "logo.png";

  button = createButton("Start");
  button.position(displayWidth - 300, displayHeight - 200); 

  button.mousePressed(function(){
    title.hide();
    appImg.hide();
    button.hide();

    title1 = createElement("h1");
    title1.position(displayWidth-950, displayHeight-700);
    title1.html("INTRODUCTION TO THE APP");


    button1 = createButton("Next");
    button1.position(displayWidth - 300, displayHeight - 200); 



      button1.mousePressed(function(){
      title1.hide();
      
      button2 = createElement("Next");
      button2.position(displayWidth - 300, displayHeight - 200);
      


    })      


  }); 



  //Creating ball sprites
  ball1 = createSprite(random(0, width), random(0, height), 60, 60);
  ball2 = createSprite(random(0, width), random(0, height), 60, 60);
  ball3 = createSprite(random(0, width), random(0, height), 60, 60);
  ball4 = createSprite(random(0, width), random(0, height), 60, 60);
  ball5 = createSprite(random(0, width), random(0, height), 60, 60);
  ball6 = createSprite(random(0, width), random(0, height), 60, 60);
  ball7 = createSprite(random(0, width), random(0, height), 60, 60);
  ball8 = createSprite(random(0, width), random(0, height), 60, 60);
  ball9 = createSprite(random(0, width), random(0, height), 60, 60);
  ball10 = createSprite(random(0, width), random(0, height), 60, 60);

// Give random velocities to ball sprites
  ball1.velocityX = random(-5, 25);
  ball1.velocityY = random(-5, 25);

  ball2.velocityX = random(-5, 25);
  ball2.velocityY = random(-5, 25);

  ball3.velocityX = random(-5, 25);
  ball3.velocityY = random(-5, 25);

  ball4.velocityX = random(-5, 25);
  ball4.velocityY = random(-5, 25);

  ball5.velocityX = random(-5, 25);
  ball5.velocityY = random(-5, 25);

  ball6.velocityX = random(-5, 25);
  ball6.velocityY = random(-5, 25);

  ball7.velocityX = random(-5, 25);
  ball7.velocityY = random(-5, 25);

  ball8.velocityX = random(-5, 25);
  ball8.velocityY = random(-5, 25);

  ball9.velocityX = random(-5, 25);
  ball9.velocityY = random(-5, 25);

  ball10.velocityX = random(-5, 25);
  ball10.velocityY = random(-5, 25);

  //Giving color to the sprites (balls)
  ball1.shapeColor = rgb(255, 0, 0);
  ball2.shapeColor = rgb(255, 0, 0);
  ball3.shapeColor = rgb(255, 0, 0);
  ball4.shapeColor = rgb(255, 0, 0);
  ball5.shapeColor = rgb(255, 0, 0);
  ball6.shapeColor = rgb(255, 0, 0);
  ball7.shapeColor = rgb(255, 0, 0);
  ball8.shapeColor = rgb(255, 0, 0);
  ball9.shapeColor = rgb(255, 0, 0);
  ball10.shapeColor = rgb(255, 255, 0);
//210,250,180
}

//Draw function
function draw() {

  //Background color
  background(30, 255, 228);  
  
  //Creating edge sprites
  edges = createEdgeSprites();

  //Styles of text
  textSize(20);
  fill("black");
  stroke(15);

  //Information of the user about the functionality of the game
  text("There is a yellow square. The ball gets changed to another color.", displayWidth-955, displayHeight-725);
  text("You need to identify the changed ball when all the balls stop.", displayWidth-950, displayHeight-700);

  //Making the ball bounce on edges
  ball1.bounceOff(edges);  
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball7.bounceOff(edges);
  ball8.bounceOff(edges);
  ball9.bounceOff(edges);
  ball10.bounceOff(edges);
  
  //Making the ball bounce on each other
  ball1.bounce(ball2);
  ball1.bounce(ball3);
  ball1.bounce(ball4);
  ball1.bounce(ball5);
  ball1.bounce(ball6);
  ball1.bounce(ball7);
  ball1.bounce(ball8);
  ball1.bounce(ball9);
  ball1.bounce(ball10);

  ball2.bounce(ball3);
  ball2.bounce(ball4);
  ball2.bounce(ball5);
  ball2.bounce(ball6);
  ball2.bounce(ball7);
  ball2.bounce(ball8);
  ball2.bounce(ball9);
  ball2.bounce(ball10);

  ball3.bounce(ball4);
  ball3.bounce(ball5);
  ball3.bounce(ball6);
  ball3.bounce(ball7);
  ball3.bounce(ball8);
  ball3.bounce(ball9);
  ball3.bounce(ball10);

  ball4.bounce(ball5);
  ball4.bounce(ball6);
  ball4.bounce(ball7);
  ball4.bounce(ball8);
  ball4.bounce(ball9);
  ball4.bounce(ball10);

  ball5.bounce(ball6);
  ball5.bounce(ball7);
  ball5.bounce(ball8);
  ball5.bounce(ball9);
  ball5.bounce(ball10);

  ball6.bounce(ball7);
  ball6.bounce(ball8);
  ball6.bounce(ball9);
  ball6.bounce(ball10);

  ball7.bounce(ball8);
  ball7.bounce(ball9);
  ball7.bounce(ball10);

  ball8.bounce(ball9);
  ball8.bounce(ball10);

  ball9.bounce(ball10);
 
  //Changing the color of the ball
  if(frameCount === 175){
    ball10.shapeColor = rgb(255, 0, 0);
  }

  //Stopping all the balls
  if(frameCount === 600){
    
    ball1.velocityX = 0;
    ball1.velocityY = 0;
    ball2.velocityX = 0;
    ball2.velocityY = 0;
    ball3.velocityX = 0;
    ball3.velocityY = 0;
    ball4.velocityX = 0;
    ball4.velocityY = 0;
    ball5.velocityX = 0;
    ball5.velocityY = 0;
    ball6.velocityX = 0;
    ball6.velocityY = 0;
    ball7.velocityX = 0;
    ball7.velocityY = 0;
    ball8.velocityX = 0;
    ball8.velocityY = 0;
    ball9.velocityX = 0;
    ball9.velocityY = 0;
    ball10.velocityX = 0;
    ball10.velocityY = 0;
  
    
    // Code checking whether the user pressed the correct ball

   
   }

  //Draw the Sprites
  drawSprites();
}
/*
    title1 = createElement("h3");
    title1.position(displayWidth-950, displayHeight-500);
    title1.html("This is the app made by me.");
    text = createText(<p>);
    text.position(displayWidth/2 -100, displayHeight/2 + 100);
    text.html("Ajitesh");
*/
  /*  var para = document.createElement("p");
    var node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);  
    var para = document.createElement("p");
    para = document.createTextNode("This is a new paragraph.");
    para.position(displayWidth-950, displayHeight-700);*/
 //   <h1>Heading 1</h1>


   // var h=document.createElement("H1");
   // var t=document.createTextNode("Hello World");
   // h.appendChild(t);
   // document.body.appendChild(h);

     //  document.write("INTRODUCTION TO THE APP");
  //  document. backgroundColor = "red";
