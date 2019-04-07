var wid = 750;
var hei = 500;
var canv;
function setup() {
  wid = 750
  hei = 500
  canv = createCanvas(wid,hei);
  angleMode(DEGREES);
}
var temp = {
numberPos: [10,20],//[750/2,500/2],
numberSize: 15,
numberColor: [125,125,125],
button1Pos: [wid/20*4,hei * 2/3],
button1Size: [100,75],
button2Pos: [wid/20*8,hei * 2/3],
button2Size: [100,75],
button3Pos: [wid/20*12,hei * 2/3],
button3Size: [100,75],
button4Pos: [(wid/20)*16,hei * 2/3],
button4Size: [100,75],
buttonTSize: 12,
buttonHoverColor: [75,75,75],
buttonHoverExpandPer: 1.1,
buttonColor: [125, 125, 125],
mainPos: [wid/2,hei/3],
mainSize: [[wid*3/4,wid*1/8],20],
mainColor: [125, 125, 125],
homePos: [wid-10,hei/2],
homeSize: [[75,50],20],
homeRot: -90,
homeColor: [125,125,125],
textColor: [250, 250, 250],
backgroundColor: [50,50,175],
fsButtonPos: [wid/2,10],
fsButtonSize: [75,50],
fsRot: 0,
fsColor: [125,125,125],
fsOText: "Full On",
fsFText: "Full Off",
fsSplit: 10
}
var home;
var slide1;
var slide2;
var slide3;
var slide4;
var slide5;
var slide6;
var slide7;
var slide8;
var slide9;
var slide10;
var slide11;
var slide12;
var slide13;
var slide14;
var slide15;
var secretslide45;
var curslide
var endslide;
var score;
var slidesWithSecrets;
var o = 0;
// var fsDon = 0;
// var fsCount = 0;
//https://meetingtomorrow.com/content-library/history-of-computers-and-computing
//http://www.computersciencelab.com/ComputerHistory/History.htm
//http://www.hitmill.com/computers/computerhx1.html
//http://www.islandnet.com/~kpolsson/comphist/comp1977.htm
//https://www.computerhistory.org/timeline/
home = new slide(0,"History of Computing",["1|Start","0|Made","0|by","0|Michel Erny"],temp,1)
  slide1 = new slide(1,"When is the earliest known year of use of an counting tool, or as called, an abacus?",["0|3018 CE","0|200 BCE","1|300 BCE","0|1337 BCE"],temp,0)
  slide2 = new slide(2,"When was IBM formed?",["0|1965","0|1894","0|1924","1|1911"],temp,0)
  slide3 = new slide(3,"When was the first 'modern' computer made?",["0|1542","1|1943","0|1991","0|1959"],temp,0)
  slide4 = new slide(4,"When was Hewlett-Packard (HP) Formed?",["1|1939","0|1966","0|1991","0|300 BCE"],temp,0)
  slide5 = new slide(5,"What did Hewlett packard developed that made a precedent for all of following popular computers?",["1|Using DRAM instead of mag cores.","0|Horrible All in Ones.","0|Making Windows.","2|Liking linux."],temp,0)
  slide6 = new slide(6,"What was the name and date of the first personal computer.",["2|The Zeke D'avy (74.01)","0|Apple 1(1976)","0|Apple 1(1974)","1|MITAS Altair(1975)"],temp,0)
  slide7 = new slide(7,"Which two are responsible for starting Microsoft?",["0|Steve Jobs and Steve Woz","1|Bill Gates and Paul Owen","0|Bill Gates and Steve Jobs","0|Bill Gates and Steve Woz"],temp,0)
  slide8 = new slide(8,"What computer company created the 'first' 'laptop'",["1|Osborne","0|BASH","0|Hewlett-Packard","0|IBM"],temp,0)
  slide9 = new slide(9,"What is the SCSI standard for?",["0|Monitors","0|USBs","0|Peripherals","1|Hard Disks, and other storage devices."],temp,0)
  slide10 = new slide(10,"A computer in 1989 beats a player of what game?",["2|Command and Conquer","0|Checkers","1|Chess","0|Go"],temp,0)
  slide11 = new slide(11,"Who made the Linux kernel, made in 1991?",["1|Linus Torvalds","0|Linus Sebastion","0|Linus Jobs","0|Bill Torvalds"],temp,0)
  slide12 = new slide(12,"Nvidia makes the first what processing unit?",["0|modulation","1|graphics","0|computing","0|subtracting"],temp,0)
  slide13 = new slide(13,"The iMac was created in what year? ",["0|13.7 BYA","1|1998","0|1597 CE","0|6000 BCE"],temp,0)
  slide14 = new slide(14,"AMD created the what processing unit? What did it combine?",["0|Central Processing Unit and it combined computing and computing","0|Graphics Processing Unit and it combined graphics with graphics","1|Accelerated Processing Unit and it combined graphics and computing","0|Krungus Processing Unit, and it combined peer jokes with peer jokes."],temp,0)
  slide15 = new slide(15,"What made Nvidia's new GPU lineup stand out (RTX 20#0 series)?",["1|Real Time RayTracing","0|Better Graphics","0|Funnier jokes","0|Ability to download more vram."],temp,0)
  secretslide45 = new slide(17,"Why do I, Michel Erny, like linux so god darn much? Press home to restart out of this.",["1|All of Below","1|Choice","1|Microsoft's anticonsumerism","1|Having my computer do what i want it to do and not what i don't."],temp,0)
endslide = new slide(16,"Made by Michel Erny",["1|Restart","0|Error ID 1, this should not pop up!","0|Error ID 1, this should not pop up!","0|Error ID 1, this should not pop up!"],temp,0)

// fsO = new button(temp.fsButtonPos[0]+(temp.fsSplit+temp.fsButtonSize[0]*5/4/2),temp.fsButtonPos[1],temp.fsButtonSize[0],temp.fsButtonSize[1],temp.buttonTSize[0],10,temp.fsOText,temp.textColor,temp.fsColor,temp.buttonHoverColor,temp.buttonHoverExpandPer)
// fsF = new button(temp.fsButtonPos[0]-(temp.fsSplit+temp.fsButtonSize[0]*5/4/2),temp.fsButtonPos[1],temp.fsButtonSize[0],temp.fsButtonSize[1],temp.buttonTSize[0],10,temp.fsFText,temp.textColor,temp.fsColor,temp.buttonHoverColor,temp.buttonHoverExpandPer)
slides = [home,slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13,slide14,slide15]
slidesWithSecrets = [slide5]
var totwrong = 0;//-slides.length + 1;
function draw() {
  background(temp.backgroundColor[0],temp.backgroundColor[1],temp.backgroundColor[2])
  //while(o < slides.length){
  if(o >= slides.length){
    var questioninos = slides.length-1
    var ratio = round(((questioninos*3-(totwrong))/(questioninos*3))*10000)/10000 + " or " + round(((questioninos*3-(totwrong))/(questioninos*3))*100)+"%"
    var strung = "Your Score:\n"
    endslide.awnsers[1] = "0|"+ strung + ratio
    endslide.awnsers[2] = "0|" + questioninos + " questions " + (questioninos * 3) + " wrong awnsers"
    endslide.awnsers[3] = "0|" + "You hit " + totwrong + " of them."
    endslide.show()
    if(endslide.correct&mouseIsPressed != 1){
        window.location.reload()
    }
  }
  else if(o < slides.length){
    slides[o].show()
    if(slides[5].secretSecret&mouseIsPressed != 1){
        totwrong += removeDuplicates(slides[o].wrongclicks).length
        secretslide45.show()//https://youtu.be/XdM2Z9F5ePo
    }
    else if(slides[6].secretSecret&mouseIsPressed != 1){
      window.location.href = "https://youtu.be/XdM2Z9F5ePo"
    }
    else if(slides[10].secretSecret&mouseIsPressed != 1){
      window.location.href = "https://www.origin.com/usa/en-us/store/command-and-conquer/command-and-conquer-the-ultimate-collection"
    }
    else if((slides[o].correct&mouseIsPressed != 1)){
        totwrong += removeDuplicates(slides[o].wrongclicks).length

        o++
    }
  }
  // fsO.show(temp.fsRot,fsO.checkHover())
  // fsF.show(temp.fsRot,fsF.checkHover())
  // if(fsO.checkClick()&(fsCount==3|fsCount==0)){
  //   fsCount = 1
  // } //https://stackoverflow.com/questions/4037212/html-canvas-full-screen
  // if(fsF.checkClick()){
  //   fsCount = 0
  //   fsDon = 0
  // }
  // if(fsCount = 1){
  //     if(fsDon == 0){
  //       //resizeCanvas(wid,hei)
  //       fsDon = 1
  //     }
  // }
  // console.log(fsCount)
}
