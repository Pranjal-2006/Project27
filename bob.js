class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:2,
			density:4

			
			}
			this.body=Bodies.circle(x, y, r/2, options)
		this.r=r
		
		World.add(world, this.body);

	}
	display()
	{
			
			var Bobpos=this.body.position;		

			push()
			translate(Bobpos.x, Bobpos.y);
			ellipseMode(CENTER)
						fill("DeepPink")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}