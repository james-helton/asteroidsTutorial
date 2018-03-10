function drawShip(ctx, x, y, r, options = {}) {
	ctx.save();

	// options = options || {};

	if(options.guide) {
		ctx.strokeStyle = 'white';
		ctx.fillStyle = 'rgba(0,0,0,0.25)';
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
	}

	ctx.lineWidth = options.lineWidth || 2;
	ctx.strokeStyle = options.stroke || 'white';
	ctx.fillStyle = options.fill || 'black';
	let angle = (options.angle || 0.5 * Math.PI) / 2;

	ctx.beginPath();
	ctx.moveTo(x + r, y);
	ctx.lineTo(
		x + Math.cos(Math.PI - angle) * r,
		y + Math.sin(Math.PI - angle) * r
	);
	ctx.lineTo(
		x + Math.cos(Math.PI + angle) * r,
		y + Math.sin(Math.PI + angle) * r
	);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.restore();
}