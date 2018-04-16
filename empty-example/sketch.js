var bord1,glas,weather,weather1,weather2,weather3,weather4;

function setup() {
createCanvas(windowWidth,windowHeight);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=a3a15698c91fee65f26ee5df6a6a5bdb&units=metric', gotData1);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&APPID=a3a15698c91fee65f26ee5df6a6a5bdb&units=metric', gotData2);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a3a15698c91fee65f26ee5df6a6a5bdb&units=metric', gotData3);
loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=a3a15698c91fee65f26ee5df6a6a5bdb&units=metric', gotData4);
bord1=loadImage('bord.jpg');
glas=loadImage('glas.png');
}
function gotData1(data1){
  weather1=data1
}
function gotData2(data2){
  weather2= data2;
}
function gotData3(data3){
  weather3=data3
}
function gotData4(data4){
  weather4=data4
}

function draw(){
 Glasses();
 Moscow();
 Copenhagen();
 London();
 Paris();
 tekst();
}
function Glasses(){
  image(bord1,0,0,windowWidth,windowHeight);
  image(glas,windowWidth/2-550,windowHeight/2-55,200,300);
  image(glas,windowWidth/2-250,windowHeight/2-55,200,300);
  image(glas,windowWidth/2+50,windowHeight/2-55,200,300);
  image(glas,windowWidth/2+350,windowHeight/2-55,200,300);

}
function Moscow(){
  noStroke();
  fill('rgba(255,255,255,0.30)')
  ellipse(windowWidth/2-450,windowHeight/2+190,150,30)

    if (weather1) {
      if(weather1.main.temp<-10){
        rect(windowWidth/2-526, windowHeight/2+85, 157,100);
      }

      if(weather1.main.temp>-10 && weather1.main.temp<0){
        rect(windowWidth/2+-526, windowHeight/2+62.5, 157,122.5);
      }

      if(weather1.main.temp>0 && weather1.main.temp<10){
        rect(windowWidth/2-526, windowHeight/2+40, 157,145);
      }

      if(weather1.main.temp>10 && weather1.main.temp<20){
        rect(windowWidth/2-526, windowHeight/2+17.5, 157,167.5);
      }

      if(weather1.main.temp>20){
        rect(windowWidth/2-526, windowHeight/2-5, 157,190);
      }
    }
  }
function Copenhagen(){
  noStroke();
  fill('rgba(183,158,36,0.50)')
  ellipse(windowWidth/2-150,windowHeight/2+190,150,30)
    if (weather2) {
      if(weather2.main.temp<-10){
        rect(windowWidth/2-226, windowHeight/2+85, 157,100);
      }

      if(weather2.main.temp>-10 && weather2.main.temp<0){
        rect(windowWidth/2-226, windowHeight/2+62.5, 157,122.5);
      }

      if(weather2.main.temp>0 && weather2.main.temp<10){
        rect(windowWidth/2-226, windowHeight/2+40, 157,145);
      }

      if(weather2.main.temp>10 && weather2.main.temp<20){
        rect(windowWidth/2-226, windowHeight/2+17.5, 157,167.5);
      }

      if(weather2.main.temp>20){
        rect(windowWidth/2-226, windowHeight/2-5, 157,190);
      }
    }
  }
function London(){
  noStroke();
  fill('rgba(109,80,13,0.60)')
  ellipse(windowWidth/2+150,windowHeight/2+190,150,30)

    if (weather3) {
      if(weather3.main.temp<-10){
        rect(windowWidth/2+75, windowHeight/2+85, 157,100);
      }

      if(weather3.main.temp>-10 && weather3.main.temp<0){
        rect(windowWidth/2+75, windowHeight/2+62.5, 157,122.5);
      }

      if(weather3.main.temp>0 && weather3.main.temp<10){
        rect(windowWidth/2+75, windowHeight/2+40, 157,145);
      }

      if(weather3.main.temp>10 && weather3.main.temp<20){
        rect(windowWidth/2+75, windowHeight/2+17.5, 157,167.5);
      }

      if(weather3.main.temp>20){
        rect(windowWidth/2+75, windowHeight/2-5, 157,190);
      }
    }
  }
function Paris(){
  noStroke();
  fill('rgba(132,14,14,0.50)')
  ellipse(windowWidth/2+450,windowHeight/2+190,150,30)

    if (weather4) {
      if(weather4.main.temp<-10){
        rect(windowWidth/2+375, windowHeight/2+85, 157,100);
      }

      if(weather4.main.temp>-10 && weather4.main.temp<0){
        rect(windowWidth/2+375, windowHeight/2+62.5, 157,122.5);
      }

      if(weather4.main.temp>0 && weather4.main.temp<10){
        rect(windowWidth/2+375, windowHeight/2+40, 157,145);
      }

      if(weather4.main.temp>10 && weather4.main.temp<20){
        rect(windowWidth/2+375, windowHeight/2+17.5, 157,167.5);
      }

      if(weather4.main.temp>20){
        rect(windowWidth/2+375, windowHeight/2-5, 157,190);
      }
    }
  }

function tekst(){
  noStroke();
fill('rgba(255,255,255,1)');
textSize(45);
textFont('Helvetica');
text('MOSCOW • COPENHAGEN • LONDON • PARIS', windowWidth/2-482, windowHeight/2-152)
textSize(45);
fill(0);
text('MOSCOW • COPENHAGEN • LONDON • PARIS', windowWidth/2-485, windowHeight/2-155)
}
