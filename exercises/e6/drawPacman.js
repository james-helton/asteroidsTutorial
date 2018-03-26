function drawPacman(ctx, {x=ctx.canvas.width/2, y=ctx.canvas.height/2, r=50, open=1}) {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.arc(x, y, r, 0.2 * open * Math.PI, (2 - 0.2 * open) * Math.PI);
	ctx.lineTo(x, y);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.closePath();
	// ctx.stroke();
	ctx.restore();
}