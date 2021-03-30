class Ground
{
    constructor(x,y,width,height)
    {
        var options_ground ={
            isStatic:true
         }
         //making the ground body using rectangle
         this.ground = Bodies.rectangle(x,y,width,height,options_ground);
         this.width=width;
         this.height=height;
          //adding ground to world
         World.add(sharvani_world,this.ground);
         
    }

    display()
    {
var pos=this.ground.position;

      //making the rectangle at the centre
 rectMode(CENTER); 
 //making the rectangle at the position of ground
rect(pos.x,pos.y,this.width,this.height);  
    }
}