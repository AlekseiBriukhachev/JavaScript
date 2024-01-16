const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;


let brickRowCount = 5;
let brickColumnCount = 3;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
	bricks[i] = [];
	for (let j = 0; j < brickColumnCount; j++) {
		bricks[i][j] = {
			x: 0,
			y: 0,
			status: 1
		};
	}
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

let rightPressed = false;
let leftPressed = false;

function keyDownHandler(e) {
	if (e.key == 'Right' || e.key == 'ArrowRight') {
		rightPressed = true;
	} else if (e.key == 'Left' || e.key == 'ArrowLeft') {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.key == 'Right' || e.key == 'ArrowRight') {
		rightPressed = false;
	} else if (e.key == 'Left' || e.key == 'ArrowLeft') {
		leftPressed = false;
	}
}

function collisionDetection() {
	for (let i = 0; i < brickRowCount; i++) {
		for (let j = 0; j < brickColumnCount; j++) {
			const brick = bricks[i][j];
			if (brick.status == 1) {
				if (x > brick.x && x < (brick.x + brickWidth) &&
					y > brick.y && y < (brick.y + brickHeight)) {
					dy = -dy;
					brick.status = 0;

					if (bricks.every(row => row.every(brick => brick == 0))) {
						alert('Congratulation! You Win!');
						document.location.reload();
					}
				}
			}
		}
	}
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}

function drawBricks() {
	for (let i = 0; i < brickRowCount; i++) {
		for (let j = 0; j < brickColumnCount; j++) {
			if (bricks[i][j].status == 1) {
				const brickX = i * (brickWidth + brickPadding) + brickOffsetLeft;
				const brickY = j * (brickHeight + brickPadding) + brickOffsetTop;
				bricks[i][j].x = brickX;
				bricks[i][j].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = '#0095DD';
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();

	if (x + dx > canvas.width - ballRadius ||
		x + dx < ballRadius) {
		dx = -dx;
	}

	if (y + dy < ballRadius) {
		dy = -dy;
		console.log(y, dy, ballRadius);
		console.log(x, dx, ballRadius);
	} else if (y + dy > canvas.height - ballRadius) {
		// if (x > paddleX && x < paddleX + paddleWidth) {
		// 	dy = -dy;
		// } else {
		// 	alert('Game Over. You lose!');
		// 	document.location.reload();
		// }
		document.location.reload();
		draw();
	}

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 7;
	}

	x += dx;
	y += dy;

	requestAnimationFrame(draw);
}

draw();
// collisionDetection();