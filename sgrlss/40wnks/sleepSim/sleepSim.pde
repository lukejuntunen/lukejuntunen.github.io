/* @pjs font="fonts/DS-Digi.ttf"; */

PFont font;
boolean sleep = false;
int flash = 0;
int time;
int dark;

void setup() {
  size(700, 625);
  font = loadFont("DS-Digital-48.vlw");
  textFont(createFont("DS-Digital", 32));
}

void draw() {
  background(250);
  fill(255, 0 , 0);
  text("Click To", 580, 50);
  text("Turn Out", 575, 80);
  text("the Lights", 550, 115);
  fill(240);
  stroke(100);
  rect(-10, 390, width+20, 250);
  fill(20);
  rect(375, 275, 125, 125);
  bed(175, 200);
  lamp(410, 275);
  fill(100);
  rect(435, 245, 75, 30);
  if (mousePressed == true) {
    sleep = true;
    time = millis();
  }
  if (sleep == true) {
    fill(0, dark);
    rect(0, 0, width, height);
  }
  if (millis() - time >= 28800000) {
    text("Good Morning!", width/2, height/2);
  }
  fill(255, 0, 0);
  if (minute() >= 10) {
    text(hour() + " " + minute() + ".", 440, 270);
  }
  else {
    text(hour() + " " + "0" + minute() + ".", 440, 270);
  }
  if (flash >= 30) {
    fill(255, 0, 0);
  }
  else {
    fill(0);
  }
  if (flash > 60) {
    flash = 0;
  }
  flash++;
  text(":", 465, 270);
  dark = 255 - (((millis() - time) - 28545000));
  //println(dark);
}

void bed(int xPos, int yPos) {
  int bedPosX = xPos;
  int bedPosY = yPos;
  fill(35);
  noStroke();
  rect(bedPosX, bedPosY, 35, 200);
  rect(bedPosX+150, bedPosY, 35, 200);
  rect(bedPosX+35, bedPosY+25, 150, 50);
  stroke(0);
  fill(255);
  quad(bedPosX+20, bedPosY+65, bedPosX+165, bedPosY+65, bedPosX+195, bedPosY+100, bedPosX-10, bedPosY+100);
  rect(bedPosX-10, bedPosY+100, 205, 50);
  fill(0);
  rect(bedPosX-45, bedPosY+40, 50, 200);
  rect(bedPosX+180, bedPosY+40, 50, 200);
  rect(bedPosX+5, bedPosY+125, 180, 45);
}

void lamp(int xpos, int ypos) {
  fill(0);
  rect(xpos, ypos, 10, -80);
  line(xpos+20, ypos-100, xpos+20, ypos-50);
  fill(235);
  quad(xpos-25, ypos-80, xpos+35, ypos-80, xpos+25, ypos-130, xpos-15, ypos-130);
}


