class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("boy.png") 
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

     fly(){
        this.sling.bodyA = null;
    }
    attach(body){
    this.sling.bodyA=body
    }

    display(){
        image(this.sling1,200,20);
        
        if(this.sling.bodyA){
          var pointA=this.body.position;
          var pointB=this.pointB;
          strokeWeight(2);
          line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    
}