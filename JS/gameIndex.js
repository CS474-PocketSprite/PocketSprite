var health = 250;
var hungry = false;
var thirsty = false;
var ill = false;

// checks if the alien is alive
function isAlive() {
	return (health > 0);
}

// updates the game screen with health and needs
function update() {
	var healthBar = document.getElementById("health");

	var t1, t2, t3;
	var ct = 0;

	var countdown = setInterval(function () {
		if (!hungry && !thirsty && !ill) {
			document.getElementById("inflic").innerHTML = "I am healthy!";
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

			document.getElementById("inflic").innerHTML = "I am " + t1 + t2 + t3 + "!";
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

// decreases the alien's health
function decreaseHealth() {
	health -= 5;
}

// increases the alien's health, or sets the health to max if over 250
function increaseHealth() {
	if (health < 250) {
		health += 25;
	} else {
		health = 250;
	}
}

// sets hungry to false and increases health
function feed() {
	hungry = false;
	increaseHealth();
}

// sets thirsty to false and increases health
function drink() {
	thirsty = false;
	increaseHealth();
}

// sets ill to false and increases health
function medicate() {
	ill = false;
	increaseHealth();
}

// start the game
function play() {
	if (!isAlive())
		return;

	update();
}

// game over
function gameOver() {
	window.location.href = "end_screen.html"
}