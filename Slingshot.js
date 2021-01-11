class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,175,20);
        stroke("#301608")
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            
        
       if(pointA.x>200){
       line(pointA.x+20, pointA.y, pointB.x-15, pointB.y);
        line(pointA.x+20, pointA.y, pointB.x +25, pointB.y);
image(this.sling3,pointA.x+20,pointA.y)

       }else{line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
        line(pointA.x-20, pointA.y, pointB.x +25, pointB.y);
image(this.sling3,pointA.x-20,pointA.y)}
    }
}
    
}