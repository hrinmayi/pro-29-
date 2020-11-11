class Shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
       
    }

    fly(){
        this.shot.bodyA = null;
    }

    display(){ 
       
        if(this.sling.bodyA){
            var pointA = this.shot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            push()
            stroke("red");
            if(pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
            else {
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.image3,pointA.x+25,pointA.y-10,15,30);
            }
        }
    }
    
}