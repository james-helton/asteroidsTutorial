function drawChainLink(ctx, xCen=0, yCen=0, xScale = 50, yScale = 50) {
	let x, y;
	let xc1, xc2, yc1, yc2;

	ctx.save();

	ctx.strokeStyle="white";
	ctx.beginPath();
	ctx.moveTo(xCen + xScale/2, yCen + yScale/2);
	ctx.lineTo(xCen + xScale/2, yCen - yScale/2);
	ctx.lineTo(xCen - xScale/2, yCen - yScale/2);
	ctx.lineTo(xCen - xScale/2, yCen + yScale/2);
	ctx.closePath();
	ctx.stroke();


	ctx.beginPath();
	x = xCen - xScale/2;
	y = yCen + yScale/2;
	ctx.moveTo(x, y);

	y -= 2 * yScale;
	ctx.lineTo(x, y);

	xc1 = x;
	yc1 = y - yScale*2/3;
	yc2 = y - yScale*2/3;
	x += xScale;
	xc2 = x;
	ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);

	x = x + xScale;
	ctx.lineTo(x, y);

	xc1 = x;
	yc1 = y - yScale * 2;
	yc2 = yc1;
	x = x - 3 * xScale;
	xc2 = x;
	ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);

	y = y + 2 * yScale;
	ctx.lineTo(x, y);
	ctx.closePath();

	ctx.fill();
	ctx.stroke();


	ctx.beginPath();
	x = xCen - xScale/2;
	y = yCen + yScale/2;
	ctx.moveTo(2 * xCen - x, 2 * yCen - y);

	y -= 2 * yScale;
	ctx.lineTo(2 * xCen - x, 2 * yCen - y);

	xc1 = x;
	yc1 = y - yScale*2/3;
	yc2 = y - yScale*2/3;
	x += xScale;
	xc2 = x;
	ctx.bezierCurveTo(2 * xCen - xc1, 2 * yCen - yc1, 2 * xCen - xc2, 2 * yCen - yc2, 2 * xCen - x, 2 * yCen - y);

	x = x + xScale;
	ctx.lineTo(2 * xCen - x, 2 * yCen - y);

	xc1 = x;
	yc1 = y - yScale * 2;
	yc2 = yc1;
	x = x - 3 * xScale;
	xc2 = x;
	ctx.bezierCurveTo(2 * xCen - xc1, 2 * yCen - yc1, 2 * xCen - xc2, 2 * yCen - yc2, 2 * xCen - x, 2 * yCen - y);

	y = y + 2 * yScale;
	ctx.lineTo(2 * xCen - x, 2 * yCen - y);
	ctx.closePath();

	ctx.fill();
	ctx.stroke();






	ctx.restore();
}
