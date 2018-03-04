function drawChainLink(ctx, xCen=200, yCen=200, xScale = 50, yScale = 50) {
	let x, y;
	let xc1, xc2, yc1, yc2, xDir, yDir;

	function bezierCurveTo(ctx, xc1, yc1, xc2, yc2, x, y, rotate) {
		if(rotate) {
			ctx.bezierCurveTo(yc1, xc1, yc2, xc2, y, x);
		} else {
			ctx.bezierCurveTo(xc1, yc1, xc2, yc2, x, y);
		}
	}

	function lineTo(ctx, x, y, rotate) {
		if(rotate) {
			ctx.lineTo(y, x);
		} else {
			ctx.lineTo(x, y);
		}

	}

	function drawQuarter(xDir, yDir, rotate) {
		ctx.beginPath();
		if(rotate) {
			y = xCen - xDir * xScale/2;
			x = yCen + yDir * yScale/2;
			ctx.moveTo(y, x);
		} else {
			x = xCen - xDir * xScale/2;
			y = yCen - (1 * yDir) + yDir * yScale/2;
			ctx.moveTo(x, y);
		}

		y -= 2 * yDir * yScale;
		lineTo(ctx, x, y, rotate);

		xc1 = x;
		yc1 = y - yDir * yScale*2/3;
		yc2 = y - yDir * yScale*2/3;
		x += xDir * xScale;
		xc2 = x;
		bezierCurveTo(ctx, xc1, yc1, xc2, yc2, x, y, rotate);

		x = x + xDir * xScale;
		lineTo(ctx, x, y, rotate);

		xc1 = x;
		yc1 = y - yDir * yScale * 2;
		yc2 = yc1;
		x = x - 3 * xDir *  xScale;
		xc2 = x;
		bezierCurveTo(ctx, xc1, yc1, xc2, yc2, x, y, rotate);

		y = y + 2 * yDir * yScale;
		lineTo(ctx, x, y, rotate);

		ctx.closePath();

		ctx.fill();
		ctx.stroke();
	}

	ctx.save();

	ctx.strokeStyle="grey";
	ctx.fillStyle="grey";
	drawQuarter(1, -1, true);
	drawQuarter(-1, 1, true);
	ctx.strokeStyle="white";
	ctx.fillStyle="white";
	drawQuarter(1, 1);
	drawQuarter(-1, -1);

	ctx.restore();
}
