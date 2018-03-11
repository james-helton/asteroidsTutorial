function drawAsteroid(ctx, options = {}) {
	let segments = options.segments || 10;
	let r = options.r || 50;
	let x = options.x || 200;
	let y = options.y || 200;

	ctx.save();
	ctx.translate(x, y);

	ctx.strokeStyle = options.stroke || 'white';
	ctx.fillStyle = options.fill || 'black';

	ctx.beginPath();

	for (let i = 0; i < segments; i++) {
		ctx.rotate(2 * Math.PI / segments);
		ctx.lineTo(r + r * options.noise * (Math.random() - 0.5), 0);
	}

	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	if(options.guide) {
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.arc(0, 0, r, 0, 2 * Math.PI);
		ctx.stroke();
	}

	ctx.restore();
}