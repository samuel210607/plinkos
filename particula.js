class particle {
    constructor (x, y){
    var options = {
        restitution: 10, 
        friction: 10,
        density:10
    }
    this.r = 10;
    this.body = Bodies.circle (x, y, 10, options);
    World.add (world, this.body)
    }
    display (){
        var loc = this.body.position;
        push ();
        translate (loc.x, loc.y);
        strokeWeight(10);
    //    this.color = color(random(0, 255), random(0, 255), random(0, 255))
        rectMode(CENTER);
  //      ellipseMode(RADIUS);
        stroke("blue");
        ellipse(0,0, 10, 10);
        pop();
    }
};