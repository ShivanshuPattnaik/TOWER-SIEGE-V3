class IndigoBox{

    constructor(x, y){

        var options = {

            isStatic : false,
            'restitution' : 0,
            'friction' : 5,
            'density' : 0.1

        }
        
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.width = 25;
        this.height = 50;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 3){

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("rgb(111, 0, 255)");
            rect(0, 0, this.width, this.height);
            pop();

        }
        else{

            World.remove(world, this.body);

            push();
            this.visibility -= 5;
            tint(255, this.visibility);
            pop();

        }

    }

    score(){

        if(this.visibility > -105 && this.visibility < 0){

            score++;

        }

    }

}