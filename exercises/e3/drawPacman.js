function drawPacman(ctx, x, y, r, open) {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.arc(x, y, r, 0.2 * open * Math.PI, (2 - 0.2 * open) * Math.PI);
	ctx.lineTo(x, y);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}