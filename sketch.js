var canvas;
var music;
var line1 , line2 , line3 , line4;
var box;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
line1 = createSprite(100,540,185,30);
line1.shapeColor= "blue";

line2 = createSprite(300,540,185,30);
line2.shapeColor= "#F87431";

line3 = createSprite(500,540,185,30);
line3.shapeColor = "#7D0541";

line4 = createSprite(700,540,185,30);
line4.shapeColor= "darkgreen";

 //create box sprite and give velocity
  box = createSprite(random(20,750),100,30,30);
  box.velocityX = -8;
  box.velocityY = 4;
  box.shapeColor ="white";
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    
    //create edgeSprite
edgeSprite1 = createSprite(0,300,5,600); 
edgeSprite2 = createSprite(400,0,800,5);
edgeSprite3 = createSprite(800,300,5,600);
edgeSprite4 = createSprite(400,600,800,5);

box.bounceOff(edgeSprite1);
box.bounceOff(edgeSprite2);
box.bounceOff(edgeSprite3);
box.bounceOff(edgeSprite4);


    //add condition to check if box touching surface and make it box

   


                    if(line1.isTouching(box)){
                        box.velocityX = 0;
                        box.velocityY = 0;
                        box.shapeColor="blue";
                        
                        }
                        if(line2.isTouching(box)){
                            box.velocityX = 0;
                            box.velocityY = 0;
                            box.shapeColor="#F87431";
                           
                            }
                            if(line3.isTouching(box)){
                                box.velocityX = 0;
                                box.velocityY = 0;
                                box.shapeColor="#7D0541";
                                
                                }
        
                                if(line4.isTouching(box)){
                                    box.velocityX = 0;
                                    box.velocityY = 0;
                                    box.shapeColor="darkgreen";
                                    
                                    }
}




