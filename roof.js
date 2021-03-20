class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
			this.body=Bodies.rectangle(x, y, w, h , options);
		this.w=w
		this.h=h
	
 		World.add(world, this.body);

	}
	display()
	{
			
			var roofPos=this.body.position;		

			
			rectMode(CENTER)
			
			fill("red")
			rect(roofPos.x, roofPos.y,this.w, this.h);
			
			
	}

}