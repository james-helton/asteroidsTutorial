function drawEss(ctx) {


	ctx.save();

	ctx.strokeStyle="grey";
	ctx.lineWidth=2;
	ctx.beginPath();
	ctx.moveTo(200, 75);
	ctx.lineTo(200, 175);
	ctx.lineTo(250, 225);
	ctx.lineTo(250, 325);
	ctx.lineTo(200, 400);
	ctx.lineTo(150, 325);
	ctx.lineTo(150, 225);
	ctx.lineTo(175, 200);
	ctx.moveTo(200, 325);
	ctx.lineTo(200, 225);
	ctx.lineTo(150, 175);
	ctx.lineTo(150, 75);
	ctx.lineTo(200, 0);
	ctx.lineTo(250, 75);
	ctx.lineTo(250, 175);
	ctx.lineTo(225, 200);
	ctx.stroke();

	ctx.restore();
}
