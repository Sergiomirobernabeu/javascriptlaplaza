var g=0
function setup(){
	createCanvas(197,152);
}

function draw(){
	g=g+1;
	if(g==0){

	}
	if(g==90){
		if(g==90){

		}
	}
	background(0);
	noFill();
	for(var posx=0;posx<width;posx=posx+20){
		for(var posy=0; posy<height; posy=posy+20){
			push();
	    	translate(posx,posy);
	    	scale(2);
	    	rotate(radians(g));
	    		fill(155,17,30)
				rect(0,0,3,3);
				fill(110,28,52)
				line(0,10,10,0);
				fill(37,109,123)
				ellipse(10,10,10,10);
				stroke(255,100,100);
				line(random(3,5),5,10,10);
			pop();
			}
  
 	 	}
	}
	
	