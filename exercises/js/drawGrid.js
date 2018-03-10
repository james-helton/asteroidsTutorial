function drawGrid(ctx, minor, major, stroke, fill) {
	minor = minor || 10;
	major = major || 50;
	stroke = stroke || '#0F0';
	fill = fill || '#090';

	ctx.save();

	ctx.strokeStyle = stroke;
	ctx.fillStyle = fill;

	for (let x = 0; x < ctx.canvas.width; x+=minor)
	{
		ctx.beginPath();
		ctx.moveTo(x,0);
		ctx.lineTo(x, ctx.canvas.height);
		ctx.lineWidth = x % major == 0 ? 0.5 : 0.25;
		if(x%major == 0) {ctx.fillText(x, x, 10);}
		ctx.stroke();
	}
	for (let y = 0; y < ctx.canvas.height; y+=minor)
	{
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(ctx.canvas.width, y);
		ctx.lineWidth = y % major == 0 ? 0.5 : 0.25;
		if(y%major == 0) {ctx.fillText(y, 0, y + 10);}
		ctx.stroke();
	}

	ctx.restore();
}
