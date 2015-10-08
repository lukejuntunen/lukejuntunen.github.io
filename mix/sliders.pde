/* @pjs font="BALLpark.ttf"; */
/* @pjs transparent="true"; */

float coke = 350;
float fanta = 350;
float barqs = 350;
float pwrade = 350;
float diet = 350;
float sprite = 350;
float mMaid = 350;
float water = 350;

int cokePC;
int fantaPC;
int barqsPC;
int pwradePC;
int dietPC;
int spritePC;
int mMaidPC;
int waterPC;
int total;

PFont font;


//int total = int(coke1+fanta1+barqs1+pwrade1+diet1+sprite1+mMaid1+water1);


void setup() {
  size(1024, 400);
  font = loadFont("BALLpark.ttf"); 
  textFont(font, 28);
}

void draw() {
  rectMode(CENTER);
  background(255,0);
  stroke(0);
  for (int i = 362; i <= 924; i += 75) {
    line(i, 25, i, 350);
  }
  noStroke();
  fill(255, 0, 0);
  rect(362, coke, 75, 25);
  fill(248, 178, 1);
  rect(437, fanta, 75, 25);
  fill(150, 167, 177);
  rect(512, barqs, 75, 25);
  fill(0);
  rect(587, pwrade, 75, 25);
  fill(209, 210, 212);
  rect(662, diet, 75, 25);
  fill(0, 143, 51);
  rect(737, sprite, 75, 25);
  fill(251, 249, 200);
  rect(812, mMaid, 75, 25);
  fill(1, 92, 240);
  rect(887, water, 75, 25);
  rectMode(CORNERS);
  fill(255, 0, 0);
  rect(212, 350, 312, 350-cokePC);
  fill(248, 178, 1);
  rect(212, 350-cokePC, 312, 350-cokePC-fantaPC);
  fill(150, 167, 177);
  rect(212, 350-cokePC-fantaPC, 312, 350-cokePC-fantaPC-barqsPC);
  fill(0);
  rect(212, 350-cokePC-fantaPC-barqsPC, 312, 350-cokePC-fantaPC-barqsPC-pwradePC);
  fill(209, 210, 212);
  rect(212, 350-cokePC-fantaPC-barqsPC-pwradePC, 312, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC);
  fill(0, 143, 51);
  rect(212, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC, 312, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC-spritePC);
  fill(251, 249, 200);
  rect(212, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC-spritePC, 312, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC-spritePC-mMaidPC);
  fill(1, 92, 240);
  rect(212, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC-spritePC-mMaidPC, 312, 350-cokePC-fantaPC-barqsPC-pwradePC-dietPC-spritePC-mMaidPC-waterPC);
  
  fill(0);
  text("Sports Punch", 25, 50);
  text("Suicide Mix", 25, 125);
  text("Lemon Orange", 25, 200);
  text("Breeze", 25, 230);
  text("Orange Root", 25, 305);
}

void mouseDragged() {
  if (mouseY < 350 && mouseY > 25 && mouseX > 362-(75/2) && mouseX < 362+(75/2)) {
    coke = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 437-(75/2) && mouseX < 437+(75/2)) {
    fanta = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 512-(75/2) && mouseX < 512+(75/2)) {
    barqs = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 587-(75/2) && mouseX < 587+(75/2)) {
    pwrade = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 662-(75/2) && mouseX < 662+(75/2)) {
    diet = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 737-(75/2) && mouseX < 737+(75/2)) {
    sprite = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 812-(75/2) && mouseX < 812+(75/2)) {
    mMaid = mouseY;
  }
  if (mouseY < 350 && mouseY > 25 && mouseX > 887-(75/2) && mouseX < 887+(75/2)) {
    water = mouseY;
  }
  float coke1 = map(coke, 350, 25, 0, 100);
  float fanta1 = map(fanta, 350, 25, 0, 100);
  float barqs1 = map(barqs, 350, 25, 0, 100);
  float pwrade1 = map(pwrade, 350, 25, 0, 100);
  float diet1 = map(diet, 350, 25, 0, 100);
  float sprite1 = map(sprite, 350, 25, 0, 100);
  float mMaid1 = map(mMaid, 350, 25, 0, 100);
  float water1 = map(water, 350, 25, 0, 100);
  total = int(coke1+fanta1+barqs1+pwrade1+diet1+sprite1+mMaid1+water1);
  cokePC = int((300*coke1)/total);
  fantaPC = int((300*fanta1)/total);
  barqsPC = int((300*barqs1)/total);
  pwradePC = int((300*pwrade1)/total);
  dietPC = int((300*diet1)/total);
  spritePC = int((300*sprite1)/total);
  mMaidPC = int((300*mMaid1)/total);
  waterPC = int((300*water1)/total);
}

void mouseClicked(){
 if(mouseX > 25 && mouseX < 212 && mouseY > 0 && mouseY < 100){
 coke = 350;
 fanta = 350;
 barqs = 350;
 pwrade = 200;
 diet = 350;
 sprite = 200;
 mMaid = 350;
 water = 350;
 } 
 if(mouseX > 25 && mouseX < 212 && mouseY > 100 && mouseY < 175){
 coke = 310;
 fanta = 310;
 barqs = 310;
 pwrade = 310;
 diet = 310;
 sprite = 310;
 mMaid = 310;
 water = 310;
 } 
 if(mouseX > 25 && mouseX < 212 && mouseY > 175 && mouseY < 285){
 coke = 350;
 fanta = 250;
 barqs = 350;
 pwrade = 350;
 diet = 350;
 sprite = 250;
 mMaid = 250;
 water = 350;
 } 
 if(mouseX > 25 && mouseX < 212 && mouseY > 285 && mouseY < 350){
 coke = 350;
 fanta = 200;
 barqs = 200;
 pwrade = 350;
 diet = 350;
 sprite = 350;
 mMaid = 350;
 water = 350;
 }  
 }

