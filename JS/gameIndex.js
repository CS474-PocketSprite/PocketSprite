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
var hungry = false;
var thirsty = false;
var ill = false;

function isAlive() {
	return (health > 0);
}

function update() {
	var healthBar = document.getElementById("health");

	var t1, t2, t3;
	var ct = 0;

	var countdown = setInterval(function () {
		//console.log(health);

		//decreaseHealth();

		if (!hungry && !thirsty && !ill) {
			document.getElementById("inflic").innerHTML = "HEALTHY";
		} else {
			if (hungry) {
				t1 = "hungry";
			} else {
				t1 = " ";
			}

			if (thirsty) {
				t2 = "thirsty";
			} else {
				t2 = " ";
			}

			if (ill) {
				t3 = "ill";
			} else {
				t3 = " ";
			}

			document.getElementById("inflic").innerHTML = "I am " + t1 + t2 + t3;
		}

		var infliction = Math.floor(Math.random() * 4);

		if (infliction == 0) {
			hungry = true;
		} else if (infliction == 1) {
			thirsty = true;
		} else if (infliction == 2) {
			ill = true;
		}

		if (hungry)
			decreaseHealth();

		if (thirsty)
			decreaseHealth();

		if (ill)
			decreaseHealth();

		if (health <= 0) {
			gameOver();
			clearInterval(countdown);
		} else {
			setInterval(function () {
				healthBar.value = health;
			}, 1000);
		}
	}, 1000);
}

function decreaseHealth() {
	health -= 5;
}

function increaseHealth() {
	if (health < 250) {
		health += 10;
	} else {
		health = 250;
	}
}

function feed() {
	hungry = false;
	increaseHealth();
}

function drink() {
	thirsty = false;
	increaseHealth();
}

function medicate() {
	ill = false;
	increaseHealth();
}

function play() {
	if (!isAlive())
		return;

	update();
}

function gameOver() {
	//console.log('Game over!');
	window.location.href = "end_screen.html"
}