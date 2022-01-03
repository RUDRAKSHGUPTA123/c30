class Block{
  constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          restitution :0.4,
          friction :0.0,
          density :0.001
      }
      this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     
    }
    display(){
      var pos= this.body.position;
      var angle = this.body.position;
      push();
      if(this.body.speed<3){
        rectMode(CENTER);
translate(pos.x,pos.y)
rotate(angle)
rect(0, 0, this.width, this.height);
pop();
  }
    else{
push();
World.remove(world,this.body);
this.visibility = this.visibility -1;
tint(100,this.visibility);
pop();
      }
    }
}