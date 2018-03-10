function drawExercise(ctx) {
	ctx.save();

	ctx.beginPath();
	ctx.strokeStyle = '#FFF';
	ctx.fillStyle = '#0F0';
	ctx.lineWidth = 2;

	ctx.moveTo(points[0].x, points[0].y);
	ctx.lineTo(points[1].x, points[1].y);
	ctx.lineTo(points[2].x, points[2].y);
	ctx.fillText(`(${points[0].x},${points[0].y})`, points[0].x-20, points[0].y-5);
	ctx.fillText(`(${points[1].x},${points[1].y})`, points[1].x-20, points[1].y+15);
	ctx.fillText(`(${points[2].x},${points[2].y})`, points[2].x+5, points[2].y+5);
	ctx.lineTo(320, 280);
	ctx.closePath();
	ctx.stroke();


	ctx.beginPath();

	ctx.moveTo(50, 250);
	ctx.quadraticCurveTo(25, 300, 50, 350);
	ctx.quadraticCurveTo(100, 325, 150, 350);
	ctx.quadraticCurveTo(150, 300, 100, 300);
	ctx.quadraticCurveTo(50, 300, 50, 250);
	ctx.closePath();

	ctx.moveTo(230, 360);
	ctx.lineTo(270, 360);
	ctx.lineTo(270, 310);
	ctx.closePath();

	ctx.moveTo(250, 50);
	ctx.lineTo(370, 50);
	ctx.lineTo(370, 100);
	ctx.closePath();
	ctx.strokeStyle = "#FFFF00";
	ctx.fillStyle = "#000000";

	ctx.moveTo(150,50);
	ctx.lineTo(150,100);
	ctx.lineTo(200,100);
	ctx.lineTo(200,50);
	ctx.lineTo(150,50);

	ctx.fill();
	ctx.stroke();

	ctx.beginPath();

	ctx.moveTo(150,50);
	ctx.bezierCurveTo(187, 75, 112, 75, 150, 100);
	ctx.bezierCurveTo(150, 137, 200, 137, 200, 100);
	ctx.bezierCurveTo(237, 125, 237, 25, 200, 50);
	ctx.bezierCurveTo(175, 12, 175, 12, 150, 50);

	ctx.strokeStyle="#F00";
	ctx.stroke();

	ctx.restore();
}
