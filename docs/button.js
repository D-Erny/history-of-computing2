class button {
  constructor(x,y,w,h,size,id,text,tcolor,butcolor,hoverColor,hoverExpand){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.id = id
      this.text = text
      this.size = size
      this.TColors = tcolor
      this.BColors = butcolor
      this.HoColor = hoverColor
      this.HoSpand = hoverExpand
  }

  show(rot,isHovered){
    push()
    translate(this.x,this.y)
    if(rot != undefined){
      rotate(rot)
    }
    rectMode(CENTER)
    fill(this.BColors[0],this.BColors[1],this.BColors[1])
    noStroke()
    rect(0,0,this.w*5/4,this.h*5/4,10)
    fill(this.TColors[0],this.TColors[1],this.TColors[2])
    textAlign(CENTER,CENTER)
    textSize(this.size)
    text(this.text,0,0,this.w,this.h)
    if(isHovered != undefined & isHovered != 0){
      fill(this.HoColor[0],this.HoColor[1],this.HoColor[2],100)
      rect(0,0,(this.w*5/4)*this.HoSpand,(this.h*5/4)*this.HoSpand,10)
    }
    pop()
  }

  checkClick(){
    var xywh = [this.x,this.y,this.w,this.h]
    var toRight = mouseX>(this.x-this.w*5/8)
    var toLeft = mouseX<(this.x+this.w*5/8)
    var toDown = mouseY>(this.y-this.h*5/8)
    var toUp = mouseY<(this.y+this.h*5/8)
    if((toUp&toDown&toLeft&toRight)&mouseIsPressed){
      return 1
    }
    else{
      return 0
    }
  }
  checkHover(){
    var xywh = [this.x,this.y,this.w,this.h]
    var toRight = mouseX>(this.x-this.w*5/8)
    var toLeft = mouseX<(this.x+this.w*5/8)
    var toDown = mouseY>(this.y-this.h*5/8)
    var toUp = mouseY<(this.y+this.h*5/8)
    if((toUp&toDown&toLeft&toRight)){
      return 1
    }
    else{
      return 0
    }
  }
}
