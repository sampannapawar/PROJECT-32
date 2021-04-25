class Box
{
    constructor(x,y,width,height,color)
       {
           var options={
           'friction':1.0,
           'density':0.2,
           'isStatic':false
                       }
                       this.Visibility=255;
              this.body=Bodies.rectangle(x,y,width,height,options);
              this.x=x;
              this.y=y;
              this.width=width;
              this.height=height;
              this.color=color;
                 

              World.add(world,this.body);
       }
        display()
        {
            if(this.body.speed<5.5){
            var angle = this.body.angle;
            push();
            console.log(this.body.speed);

            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill(this.color);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
            }
            else{
                  World.remove(world,this.body);
                  push();
                  this.Visibility=this.Visibility-5;
                 // tint(255,this.Visibility);
                 // rect(this.body.position.x,this.body.position.y,30,40);
                  pop();
            }
        }
        score(){
            if(this.Visibility<0 && this.Visibility >-105){
             
               score++;
              }
         }
}