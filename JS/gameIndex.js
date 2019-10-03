// const btn = document.querySelector('actionButton2');
// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	var height = document.getElementById("healthBar").height;
// 	if (height == "250") {
// 		if (document.getElementById("healthBar").background = rgb(225, 0, 0)) {
// 			document.getElementById("healthBar").height = "50";
// 			document.getElementById("healthBar").background = rgb(0, 128, 0);
// 		}
// 		else
// 			document.querySelector('welcomeScreen').textContent = "You win!";
// 	}
// 	else {
// 		document.getElementById("healthBar").height = "${50+height}";
// 	}
// 	// if height = 250 1. if background-color = rgb(225, 0, 0), change to green and update height to 50; 2. if color is green, change the title to "you win"
// 	// else, get the previous height and increment it by 50
// 	//    document.querySelector(‘healthBar’).style.background = ‘#ccc’;
// });


var health = 250;

function isAlive() {
	return (health > 0);
}

function update() {
	// while (health != 0) {
		setInterval(function(){
			console.log(health);
			decreaseHealth();

			if (health <= 0) {
				gameOver();
			}
		}, 1000);
	// }

	// gameOver();
}

function decreaseHealth() {
	health -= 5;
}

function play() {
	if (!isAlive())
		return;

	update();
}

function gameOver() {
	console.log('Game over!');
}