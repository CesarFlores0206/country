//set global variable
var nations;
var population;
var inputMouse = 0;
var inputRange = 0;
var legend;
var legend;
var legendPlace;

//variables for the inputs of the mouse

var colors = [];


function preload(){
 
nations = loadJSON("nations.json");


}

function setup() {
  colors = [color(95,191,160),color(200,10,70),color(220, 220, 220),color(128, 67, 193),color(60,60,160)];
  createCanvas(1500,1000);
  angleMode(DEGREES);
  //sets size of canvas
  inputRange = width/2;
  //specify input range
  
}



function draw() {
  background(40);
  noStroke();
  //no stroke on ellipse
  textSize(32);
  textAlign(CENTER)
  fill('white');
  
  push();
  translate(80,500);
  rotate(-90);
  text("life Expectancy", 0 ,0);
  //text("else", 200,0);
  pop();
  
  text("Income",600,850);
  
  textFont();
  
  fill('white');
  textAlign(CENTER);
  text("Life Expectancy affected by Income",700,50);
  
  textSize(10);
  fill(140);
  push();
  textSize(20);
  translate(80,920);
  rotate(-90);
  text("Legend",0,0);
  //rotate(270);
  pop();
  text("East/South Asia",130,880);
  text("Sub Saharan Africa",300,880);
  text("Middle East & North Africa",490,880);
  text("America",680,880);
  text("Europe & Central Asia",860,880);
  noFill();
  stroke(3);
  rect(90,870,820,100);
  noStroke();
  fill(95,191,160);
  ellipse(130,930,50,50);
  fill(200,10,70);
  ellipse(290,930,50,50);
  fill(220, 220, 220);
  ellipse(480,930,50,50);
  fill(128, 67, 193);
  ellipse(670,930,50,50);
  fill(60,60,160);
  ellipse(850,930,50,50);

  
 
  
var colorRamp = frameCount%60;
fill(map(colorRamp,0,59,100,255));
push();
translate(1340,700)
triangle(30, 75, 30, 20, 86, 45);
//triangle(30, 75, 30, 20, 86, -45);
pop();
push();
translate(970,700);
triangle(70, 75, 70, 20, 16, 45);
pop();

 inputMouse = constrain(mouseX,width/2,width) - width/2;
 textSize(150)
 textAlign(CENTER);
 stroke('black');
 fill('white');
 text(floor(map(inputMouse,0,width/2,1800,2009)),width*0.8,height*0.8)
 //color(random('white',255, 235, 86))
      //floor and map the mouseScrub to the range of years and shows text on screen
      
textSize(20);

noStroke();
textAlign(CENTER);
fill('white');
 
 for(var i=0; i<162; i ++){
  var tempY = dataReturn(i,"lifeExpectancy",height-20,0,inputMouse,inputRange);
  var tempX = dataReturn(i,"income",130,width-200,inputMouse,inputRange);
  //fill(i*2,200-(i*2),200);
  dataEllipse(tempX,tempY,i,"population",15,30,inputMouse,inputRange);
  //accesses info from created function and looks as follows
  //dataEllipse(xpos, ypos, country#, "property", min circle size, max circle size, and the mapping to where the mouse starts and the range);
}

stroke('white');
fill('white');
line(100,50,100,800);
line(100,800,1000,800);
//horizontal tick marks
for(var i = 150; i<1000; i+=50){
  line(i,750,i,800);
  
  var incomeNumber = round(map(i,150,1000,0,100));
  push();
  translate(i-5,755);
  rotate(-90);
  text(incomeNumber + "K",0,0);
  pop();
  
  
}
//vertical tick marks
for(var y = 0; y<800; y+=50){
  line(100,y,150,y);
  
  var lifeExpectancy = round(map(y,5,800,95,0));
  push();
  translate(135,y-5);
  rotate(0);
  text(lifeExpectancy + " Yrs",0,0);
  pop();
  
  
}



  /*
  fill('white');
  textAlign(1300,300);
  textSize(50);
  text("America");
  text("Europe & Central Africa");
  text("Sub-Saharan Africa");
  text("Middle East & North Africa");
  text("East Asia & Pacific");
  text("South Asia");
  */
/* 

//figures out how many population entries there are for that country
var inputLength = nations[0].population.length;


//println(countryData.country[0].population[0]);
//take mouse x and map it on pop entries
//floor gets rid of the decimals
//use constraint to limit the position

var inputProp = (map(mouseX,0,width,0,inputLength));
inputProp = floor(inputProp);
inputProp=constrain(inputProp,0,inputLength);

//nations is country [entry number] pop [year][year value or population]
var angolaPop= nations[0].population[inputPop][1];
var angolaLife= nations[0].lifeExpectancy[inputPop][1];
var angolaincome= nations[0].income[inputPop][1];

var inputLength = nations[0].lifeExpectancy.length;
var inputLength = nations[0].income.length;

var inputLife = (map(mouseX,0,width,0,inputLength));
inputLife = floor(inputPop);
inputLife=constrain(inputPop,0,inputLength);

angolaPop= map(angolaPop,0,12707546,0,250);
fill('red');
ellipse(width*.25,height/2,angolaPop,angolaPop);

angolaLife= map(angolaLife,0,50,0,250);
fill('green')
ellipse(width*.5,height/2,angolaLife,angolaLife);

angolaincome= map(angolaLife,0,12707546,0,250);
fill('green')
ellipse(width*.5,height/2,angolaincome,angolaincome);

//ellipse(width/2,height/2,angolaPop,angolaPop);

textAlign(CENTER)
fill(265)
text(nations[0].population[inputPop][0],width/2,height/2);

println(inputPop);


*/
}

function dataEllipse (xpos,ypos,nationNumber,property,minSize,maxSize,inputPos,inputMax){
  
  var category = "nations[" + nationNumber + "]." + property;

var inputPropLength = eval(category + ".length - 1");
//variable to fingure out how many population entries there are

var inputProp = map(inputPos,0,inputMax,0,inputPropLength);

inputProp = floor(inputProp);

inputProp=constrain(inputProp,0,inputPropLength);
//taking value of x and mapping it to population number

var propName = "region";
  var region = eval("nations[" + nationNumber + "]." + propName);
  
  switch(region){
    case "America":
      fill(colors[0]);
    break;
      
    case "Europe & Central Asia":
      fill(colors[4]);
    break;
    
    case "Sub-Saharan Africa":
      fill(colors[1]);
    break;
    
    case "Middle East & North Africa":
      fill(colors[2]);
    break;
    
    case "East Asia & Pacific":
      fill(colors[3]);
    break;
    
    case "South Asia":
      fill(colors[3]);
    break;
    
    default:
      fill(0);
    break;
  }


var visualizeProp = eval(category + "[inputProp][1]");

visualizeProp = map(visualizeProp,0,140000000,minSize,maxSize);

ellipse(xpos,ypos,visualizeProp,visualizeProp);

fill(0);
//text(eval(category + "[inputProp][1]"),xpos,ypos);

}

function dataReturn (nationNumber,property,minRange,maxRange,inputPos,inputMax){
  var category = "nations[" + nationNumber + "]." + property;
  //create shortcut access using concatenating (+) to add together strings and characters

var inputPropLength = eval(category + ".length - 1");

var inputProp = map(inputPos,0,inputMax,0,inputPropLength);

inputProp = floor(inputProp);

inputProp=constrain(inputProp,0,inputPropLength);

var visualizeProp = eval(category + "[inputProp][1]");

var propertyMax = 0;

if(property == "lifeExpectancy"){
  propertyMax=90;
  visualizeProp = map(visualizeProp,0,propertyMax,minRange,maxRange);
}
if(property == "income"){
  propertyMax=100000;
  
  //calculate the total visual space for the income
      var totalRange = maxRange - minRange;
      var lowerTwoThirds = minRange + (totalRange * .66);
      
      if(visualizeProp < 20000){
        //spread out the income over the first two thirds
        visualizeProp = map(visualizeProp,0,20000,minRange,lowerTwoThirds);
      }
      if(visualizeProp > 20000){
      visualizeProp = map(visualizeProp,20000,propertyMax,lowerTwoThirds,maxRange);
      }
}

return visualizeProp;


  
}
