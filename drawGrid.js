function drawGrid() {
	var canvas = document.getElementById('asteroids');
	var context = canvas.getContext('2d');

	context.strokeStyle = '#0F0';
	context.fillStyle = '#090';

	for (let x = 0; x < canvas.width; x+=10)
	{
		context.beginPath();
		context.moveTo(x,0);
		context.lineTo(x, canvas.height);
		context.lineWidth = x % 50 == 0 ? 0.5 : 0.25;
		if(x%50 == 0) {context.fillText(x, x, 10);}
		context.stroke();
	}
	for (let y = 0; y < canvas.height; y+=10)
	{
		context.beginPath();
		context.moveTo(0, y);
		context.lineTo(canvas.width, y);
		context.lineWidth = y % 50 == 0 ? 0.5 : 0.25;
		if(y%50 == 0) {context.fillText(y, 0, y + 10);}
		context.stroke();
	}
}
