function drawStar(ctx, deg = 144, iter = 5, stroke = '#0F0') {
	let angle = 0;
	let xCen = 200;
	let yCen = 200;

	ctx.save();

	ctx.strokeStyle = stroke;
	ctx.beginPath();
	ctx.moveTo(200 - (50 * Math.sin(angle * Math.PI / 180)), 200 - (50 * Math.cos(angle * Math.PI / 180)));

	for (let x = 0; x < iter; x++)
	{
		angle += deg;
		ctx.lineTo(200 - (50 * Math.sin(angle * Math.PI / 180)), 200 - (50 * Math.cos(angle * Math.PI / 180)));
	}
		ctx.stroke();

	ctx.restore();
}
