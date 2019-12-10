var diameter = 50;

function setup();{
	createCanvas(500, 500);
	TextSize(20);
	textFont("roboto");
	text('Greetings', 50, 50);
}

	function draw(){
		background("#26457A");
		ellipse(mouseX, mouseY, 10, 10);
		fill(#F9D71C);

		if (mouseIsPressed){
			diameter = 100;
			fill(#D0D5D2);
		}
		else{
			diameter = 50;
			fill(255, 255 255);
		}

	
	}
