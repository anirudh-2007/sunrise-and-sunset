const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hours;
var bg="sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

 //   getBackgroundImg();

}

function draw(){
  if(backgroundImg)
  background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    if(hours==0){
        text("Time : 24 ",100,100);
      }else{
       text("Time : "+ hours, 50,100);
      }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var time = responseJSON.datetime;
    // write code slice the datetime
     hours = time.slice(11,13);
    console.log(hours);

      

        

    // add conditions to change the background images from sunrise to sunset
    if(hours>=04 && hours<=06){
        bg = "sunrise1.png";
     
    }
    else if(hours>=06 && hours<=08){
       bg = "sunrise2.png";
     
       }
    
    else if(hours>=08 && hours<=10){
        bg = "sunrise3.png";
       
        }
    else  if(hours>=10 && hours<=12){
        bg = "sunrise4.png";
    
        }
    else if(hours>=12 && hours<=14){
        bg = "sunrise5.png";

        }
    else if(hours>=14 && hours<=16){
        bg = "sunrise6.png";
     
        }
    else if(hours>=16 && hours<=18){
        bg = "sunset7.png";
      
        }
    else if(hours>=18 && hours<=20){
        bg = "sunset8.png";
        
        }
    else if(hours>=20 && hours<=22){
        bg = "sunset9.png";
       
        }
    else if(hours>=20 && hours<=22){
        bg = "sunset10.png";
      
        }
    else if(hours>=22 && hours<=00){
        bg = "sunset11.png";
        
        }
    else if(hours>=00 && hours<=02){
        bg = "sunset12.png";
        

            }
    
    
      //load the image in backgroundImg variable here
      backgroundImg = loadImage(bg);
      
    }

  


