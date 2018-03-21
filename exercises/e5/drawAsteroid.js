function drawAsteroid(ctx, options = {}) {
	let shape = options.shape;
	let r = options.r || 50;
	let x = options.x || 200;
	let y = options.y || 200;
	let n = options.noise || 0.1;
	let rotation = options.a || 0;

	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(rotation)

	ctx.strokeStyle = options.stroke || 'white';
	ctx.fillStyle = options.fill || 'black';

	ctx.beginPath();

	for (let i = 0; i < shape.length; i++) {
		ctx.rotate(2 * Math.PI / shape.length);
		ctx.lineTo(r + r * n * shape[i], 0);
	}

	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	if(options.guide) {
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		ctx.arc(0, 0, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.lineWidth = 0.3;
		ctx.beginPath();
		ctx.arc(0, 0, r + r * n * 0.5, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, 0, r + r * n * -0.5, 0, 2 * Math.PI);
		ctx.stroke();
	}

	ctx.restore();
};

function generateAsteroidShape(segments = 10) {
	// let segments = options.segments || 10;
	let shapeData = [];
	for (let i = 0; i < segments; i++) {
		shapeData.push(Math.random() - 0.5);
	}
	return shapeData;
};