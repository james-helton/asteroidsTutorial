function drawShip(ctx, options = {}) {
	ctx.save();

	// options = options || {};

	let rotation = options.shipAngle || 0;
	let x = options.x || 0;
	let y = options.y || 0;
	let r = options.r || 50;
	ctx.translate(x, y)
	ctx.rotate(rotation);

	if(options.guide) {
		ctx.strokeStyle = 'white';
		ctx.fillStyle = 'rgba(0,0,0,0.25)';
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.arc(0, 0, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
	}

	ctx.lineWidth = options.lineWidth || 2;
	ctx.strokeStyle = options.stroke || 'white';
	ctx.fillStyle = options.fill || 'black';
	let pointAngle = (options.pointAngle || 0.5 * Math.PI) / 2;
	ctx.beginPath();
	ctx.moveTo(0 + r, 0);
	ctx.lineTo(
		0 + Math.cos(Math.PI - pointAngle) * r,
		0 + Math.sin(Math.PI - pointAngle) * r
	);
	ctx.lineTo(
		0 + Math.cos(Math.PI + pointAngle) * r,
		0 + Math.sin(Math.PI + pointAngle) * r
	);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.restore();
}