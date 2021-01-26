class Polygon{

    constructor(x, y, radius){

        var options = {

            isStatic : false,
            'restitution' : 0.5,
            'density' : 0.5

        }

        this.body = Bodies.circle(x, y, radius / 3, options);
        this.radius = radius;
        this.image = loadImage("polygon.png");

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();

    }

}