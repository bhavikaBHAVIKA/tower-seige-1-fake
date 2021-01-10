class Ground{
constructor(){
    var dog={
        isStatic : true
    }

this.body = Bodies.rectangle(450,390,900,20,dog)
World.add(world,this.body);


}
display(){
    noStroke();
    fill(188,67,67)
    rectMode(CENTER);
    rect(this.body,position.x, this.body.postion.y,900,20)
}
}