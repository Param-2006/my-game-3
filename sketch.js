
var square1, square2, square3, square4;

var gameState="welcome";
var option=0;


function setup(){
createCanvas(1500,800);
 square1=createSprite(150,395,15,15);
 square1.visible=false;
 square1.shapeColor="grey";
 square2=createSprite(150,445,15,15);
 square2.visible=false;
 square2.shapeColor="grey";
 square3=createSprite(150,495,15,15);
 square3.visible=false;
 square3.shapeColor="grey";
// square4=createSprite(300,300,10,10);
}

function draw(){
background("black");
if(gameState!=="welcome"){
    square1.visible=true;
    square2.visible=true;
    square3.visible=true;
}
textSize(35);
fill("red");
text("Welcome to Police selection!",300,50);
textSize(20);
fill("White");
text("We need an intelligent police officer in our department, Can it be you?",200,150);

if(gameState==="welcome"){
   text("Press space to start!",200,300);
}
if(keyDown("space")||gameState!=="welcome"){
    gameState="question";
    fill("white");
    text("An old man lived alone in a small cottage.",100,200);
    text("One certain Thursday morning, while the mailman was delivering a letter he found out that the old man is murdered.",100,220);
    text("He immediately calls the cops.",100,240);

    text("When the cops arrive at the scene,",100,260);
    text("they find two bottles of milk, Monday’s newspaper, a catalog, flyers, and unopened mail.",100,280);
    text("The police find the suspect. Who is the suspect and why?",100,300);
    fill("orange");
    text("Select the correct answer",100,350);
    fill("white");
    text("The newspaper boy",200,400);
    text("It wasn't a murder, it was a suicide",200,450);
    text("There was an animal who killed the old man",200,500);
   }

    if(mousePressedOver(square1)||mousePressedOver(square2)||mousePressedOver(square3)||gameState=="answer")
    {
        gameState="answer";
        if(mousePressedOver(square1)||option==1)
        { 
            option=1;
            square2.x=1600;
            square3.x=1600;
            square1.shapeColor="green";
         text("Hurray!You are selected for the next round",200,530);
         text("It was the news paper boy because tuesday's and wednesday's newspapers were missing",200,550);
        }
         if(mousePressedOver(square2)||option==2)
        { 
            option=2;
            square1.x=1600;
            square3.x=1600;
            square2.shapeColor="red";
            text("Sorry! this is the wrong answer",200,530);
            text("It was the news paper boy because tuesday's and wednesday's newspapers were missing",200,550);
        }
         if(mousePressedOver(square3)||option==3)
        {
            option=3;
            square2.x=1600;
            square1.x=1600;
            square3.shapeColor="red";
            text("Sorry! this is the wrong answer",200,530);
            text("It was the news paper boy because tuesday's and wednesday's newspapers were missing",200,550);
        }    

    }
      /*if(gameState==="answer")
      {
          if(option==1)
         {
         square1.shapeColor="green";
         text("Hurray!You are selected for the next round",200,530);
         text("It was the news paper boy because tuesday's and wednesday's newspapers were missing",200,550);
         }
        else if(option==2)
        {
            square2.shapeColor="red";
            text("Sorry! this is the wrong answer",200,530);
            text("It was the news paper boy because tuesday's and wednesday's newspapers were missing",200,550);
        }
        else if(option==3)
        {
            square3.shapeColor="red";
            text("Sorry! this is the wrong answer",200,530);
            text("It was the news paper boy because tuesday's and wednesday's newspapers were missing",200,550);
        }
    }*/
drawSprites();

}