class Particale{
constructor(x,y){
  var options ={
    restitution: 1,
    
  

  }
     this.r=10;
     this.body = Bodies.circle(x, y, this.r, options);
     this.color =color(random(0,255),random(0,255),random(0,255));
     World.add(world, this.body);
}
display(){

    push();
    translate();
    rotate();
    
    noStroke();
    fill("red");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();






}



}