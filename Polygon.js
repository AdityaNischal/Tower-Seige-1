class Polygon {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      this.body = Bodies.circle(x,y,30,options);
      World.add(world,this.body)
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1)
      stroke("black")
      fill("yellow");
      ellipse(pos.x, pos.y);
    }
  };