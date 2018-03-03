function drawChainLink(ctx, xCen=0, yCen=0, xScale = 50, yScale = 50) {
	let x, y;
	let xc1, xc2, yc1, yc2, xDir, yDir;

	function drawQuarter(xDir, yDir) {
		ctx.beginPath();
		x = xCen - xDir * xScale/2;
		y = yCen - (1 * yDir) + yDir * yScale/2;
		ctx.moveTo(x, y);

		y -= 2 * yDir * yScale;
		ctx.lineTo(x, y);

		xc1 = x;
		yc1 = y - yDir * yScale*2/3;
		yc2 = y - yDir * yScale*2/3;
		x += xDir * xScale;
		xc2 = x;
		ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);

		x = x + xDir * xScale;
		ctx.lineTo(x, y);

		xc1 = x;
		yc1 = y - yDir * yScale * 2;
		yc2 = yc1;
		x = x - 3 * xDir *  xScale;
		xc2 = x;
		ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);

		y = y + 2 * yDir * yScale;
		ctx.lineTo(x, y);
		ctx.closePath();

		ctx.fill();
		ctx.stroke();
	}

	function drawQuarter2(xDir, yDir) {
		ctx.beginPath();
		y = xCen - xDir * xScale/2;
		x = yCen + yDir * yScale/2;
		ctx.moveTo(y, x);

		y -= 2 * yDir * yScale;
		ctx.lineTo(y, x);

		xc1 = x;
		yc1 = y - yDir * yScale*2/3;
		yc2 = y - yDir * yScale*2/3;
		x += xDir * xScale;
		xc2 = x;
		ctx.bezierCurveTo(yc1, xc1, yc2, xc2, y, x);

		x = x + xDir * xScale;
		ctx.lineTo(y, x);

		xc1 = x;
		yc1 = y - yDir * yScale * 2;
		yc2 = yc1;
		x = x - 3 * xDir *  xScale;
		xc2 = x;
		ctx.bezierCurveTo(yc1, xc1, yc2, xc2, y, x);

		y = y + 2 * yDir * yScale;
		ctx.lineTo(y, x);
		ctx.closePath();

		ctx.fill();
		ctx.stroke();
	}


	ctx.save();

	ctx.strokeStyle="white";
	// ctx.beginPath();
	// ctx.moveTo(xCen + xScale/2, yCen + yScale/2);
	// ctx.lineTo(xCen + xScale/2, yCen - yScale/2);
	// ctx.lineTo(xCen - xScale/2, yCen - yScale/2);
	// ctx.lineTo(xCen - xScale/2, yCen + yScale/2);
	// ctx.closePath();
	// ctx.stroke();

	// xDir = 1;
	// yDir = 1;
	// ctx.beginPath();
	// x = xCen - xDir * xScale/2;
	// y = yCen + yDir * yScale/2;
	// ctx.moveTo(x, y);

	// y -= 2 * xDir * yScale;
	// ctx.lineTo(x, y);

	// xc1 = x;
	// yc1 = y - xDir * yScale*2/3;
	// yc2 = y - yDir * yScale*2/3;
	// x += xDir * xScale;
	// xc2 = x;
	// ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);

	// x = x + xDir * xScale;
	// ctx.lineTo(x, y);

	// xc1 = x;
	// yc1 = y - yDir * yScale * 2;
	// yc2 = yc1;
	// x = x - 3 * xDir *  xScale;
	// xc2 = x;
	// ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);

	// y = y + 2 * yDir * yScale;
	// ctx.lineTo(x, y);
	// ctx.closePath();

	// ctx.fill();
	// ctx.stroke();

	ctx.strokeStyle="grey";
	ctx.fillStyle="grey";
	drawQuarter2(1, -1);
	drawQuarter2(-1, 1);
	ctx.strokeStyle="white";
	ctx.fillStyle="white";
	drawQuarter(1, 1);
	drawQuarter(-1, -1);






	ctx.restore();
}
