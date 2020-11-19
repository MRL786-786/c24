class Bird

    { constructor(x,y){
     var options = { restitution : 1 }
      this.body = Bodies.rectangle(x,y,50,50,options);
     this.width = 50;
      this.height = 50;
      World.add(world,this.body);
             }
     display()
     {
         var angle= this.body.angle;
         var position= this.body.position;
         position.x=mouseX;
         position.y=mouseY;
         push();
         translate(position.x, position.y);
         rotate(angle);
       rectMode(CENTER);
       stroke("red");
       strokeWeight(6);
      fill(255);
      rect(0,0,this.width,this.height);
      pop();
     }
    }