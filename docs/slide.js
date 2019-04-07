class slide{
  constructor(number,question,awnsers,template,ignoreawnsers){
    this.number = number;
    this.question = question;
    this.awnsers = awnsers
    this.numberProp = [template.numberPos,template.numberSize,template.numberColor]
    this.button1Prop = [template.button1Pos,template.button1Size,template.buttonTSize,template.buttonColor]
    this.button2Prop = [template.button2Pos,template.button2Size,template.buttonTSize,template.buttonColor]
    this.button3Prop = [template.button3Pos,template.button3Size,template.buttonTSize,template.buttonColor]
    this.button4Prop = [template.button4Pos,template.button4Size,template.buttonTSize,template.buttonColor]
    this.mainProp = [template.mainPos, template.mainSize,template.mainColor]
    this.homeProp = [template.homePos,template.homeSize[0],template.homeRot,template.homeSize[1],template.homeColor]
    this.correct = 0
    this.wrongclicks = [];
    this.igna = ignoreawnsers
    this.colors = template.textColor
    this.hColor = template.buttonHoverColor
    this.hEx = template.buttonHoverExpandPer
  }
  show(){
    push()
      noStroke()
      rectMode(CENTER)
      translate(this.numberProp[0][0],this.numberProp[0][1])
        fill(this.numberProp[2][0],this.numberProp[2][1],this.numberProp[2][2])
        if(this.numberProp[0][1] == this.numberProp[1]-5){
          rect(0,-this.numberProp[1]/2,this.numberProp[1]+10,this.numberProp[1]/2)
        }
        if(this.numberProp[0][0] == this.numberProp[1]-5){
          rect(-this.numberProp[1]/2,0,this.numberProp[1]/2,this.numberProp[1]+10)
        }
        rect(0,0,this.numberProp[1]+20,this.numberProp[1]+10,10)
        textSize(this.numberProp[1])
        textAlign(CENTER,CENTER)
        fill(this.colors[0],this.colors[1],this.colors[2])
        translate(this.numberProp[1]*2/6,0)
          text(this.number,0,0,this.numberProp[1]+15,this.numberProp[1]+5)
    pop()

    push()
    noStroke()
    rectMode(CENTER)
    fill(125,125,125)
    translate(this.mainProp[0][0],this.mainProp[0][1])
    rect(0,0,this.mainProp[1][0][0]+10,this.mainProp[1][0][1]+10,10)
    fill(250,250,250)
    textSize(this.mainProp[1][1])
    textAlign(CENTER,CENTER)
    text(this.question,0,0,this.mainProp[1][0][0],this.mainProp[1][0][1])
    pop()

    push()
    for(var i = 0; i < this.awnsers.length; i++){
      const splitter = split(this.awnsers[i],"|")
      if(splitter[0]==1){
        this.correctBoi = i
      }
      if(splitter[0]==2){
        this.hinty = i
      }
    }
    const home = new button(this.homeProp[0][0],this.homeProp[0][1],this.homeProp[1][0],this.homeProp[1][1],this.homeProp[3],0,"home",this.colors,this.homeProp[4],this.hColor,this.hEx)
    const button1 = new button(this.button1Prop[0][0],this.button1Prop[0][1],this.button1Prop[1][0],this.button1Prop[1][1],this.button1Prop[2],1,split(this.awnsers[0],"|")[1],this.colors,this.button1Prop[3],this.hColor,this.hEx)
    const button2 = new button(this.button2Prop[0][0],this.button2Prop[0][1],this.button2Prop[1][0],this.button2Prop[1][1],this.button2Prop[2],2,split(this.awnsers[1],"|")[1],this.colors,this.button2Prop[3],this.hColor,this.hEx)
    const button3 = new button(this.button3Prop[0][0],this.button3Prop[0][1],this.button3Prop[1][0],this.button3Prop[1][1],this.button3Prop[2],3,split(this.awnsers[2],"|")[1],this.colors,this.button3Prop[3],this.hColor,this.hEx)
    const button4 = new button(this.button4Prop[0][0],this.button4Prop[0][1],this.button4Prop[1][0],this.button4Prop[1][1],this.button4Prop[2],4,split(this.awnsers[3],"|")[1],this.colors,this.button4Prop[3],this.hColor,this.hEx)
    this.buttons = [button1,button2,button3,button4]
    home.show(this.homeProp[2],home.checkHover())
    button1.show(0,button1.checkHover())
    button2.show(0,button2.checkHover())
    button3.show(0,button3.checkHover())
    button4.show(0,button4.checkHover())
    for(var i = 0; i < this.buttons.length; i++){
      var curbutton = this.buttons[i]
      if(i == this.correctBoi){
        if(curbutton.checkClick()){
          this.correct = 1
        }
      }
      else if(i == this.hinty){
        if(curbutton.checkClick()){
          this.secretSecret = 1
        }
      }
      else if(curbutton.checkClick()){
        this.wrongclicks.push(i)
      }
    }
    if(this.igna == 0){
      for(var i = 0; i < this.wrongclicks.length; i++){
        var curbutton = this.buttons[this.wrongclicks[i]]
        for(var a = -1; a < 2; a+=2){
          push()
          translate(curbutton.x,curbutton.y)
          stroke(255,0,0)
          strokeWeight(5)
          line(-curbutton.w*a,-curbutton.h,curbutton.w*a,curbutton.h)
          noStroke()
          pop()
        }
      }
    }
    if(home.checkClick()){
      window.location.reload()
    }
  }
}
