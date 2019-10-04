
const btn = document.querySelector('actionButton2');
btn.addEventListener('click', (e)=> {
        e.preventDefault();
	var height = document.getElementById("healthBar").height;
	if(height == "250"){
	    if(document.getElementById("healthBar").background = rgb(225,0, 0)) {
		document.getElementById("healthBar").height="50";
		document.getElementById("healthBar").background = rgb(0,128, 0);
		}
		else
		document.querySelector('welcomeScreen').textContent = "You win!";
	}
	else{
		document.getElementById("healthBar").height="${50+height}";
	}
	// if height = 250 1. if background-color = rgb(225, 0, 0), change to green and update height to 50; 2. if color is green, change the title to "you win"
	// else, get the previous height and increment it by 50
	//    document.querySelector(‘healthBar’).style.background = ‘#ccc’;
});


var health = 250;
var Sprite = {
    initialize: function (name) {
      this.name = name;
      this.foodLevel = 50;
      this.thirstLevel = 50;
      this.medLevel = 50;
    },
    timePasses: function () {
      this.foodLevel = this.foodLevel - 2;
      this.thirstLevel = this.thirstLevel - 2;
      this.medLevel = this.medLevel - 2;
    },
    isAlive: function () {
      if (this.foodLevel <= 0 || this.thirstLevel <= 0 || this.medLevel <= 0) {
        return false;
      } else {
        return true;
      }
    },
    foodUp: function() {
	  this.foodLevel = this.foodLevel + 5;
	
    },
    thirstUp: function() {
	  this.thirstLevel = this.thirstLevel + 5;
	  
    },
    medUp: function() {
	  this.medLevel = this.medLevel + 5;
	 
    }
  }
function isAlive() {
	return (health > 0);
}
// Interval

var inputName = document.querySelector(".spriteName");

function update() {
	var healthBar = document.getElementById("health");
	var countdown = setInterval(function() {
		Sprite.timePasses();
		console.log(health);
		decreaseHealth();
		if (health <= 0) {
			gameOver();
			clearInterval(countdown);
		} else {
			setInterval(function() {
				healthBar.value = health;
			}, 1000);
		}
	}, 1000);
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
	window.location.href = "end_screen.html"
}


$(document).ready(function() {
  $("#play").click(function() {
    $("#play").hide();
    Sprite = Object.create(Sprite);
    var countdown = setInterval(function() {

        Sprite.timePasses();
        $("span#foodLevel").text(Sprite.foodLevel);
        $("span#thirstLevel").text(Sprite.thirstLevel);
        $("span#medLevel").text(Sprite.medLevel);
        if (!Sprite.isAlive()) {
          clearInterval(countdown);
          $("#play").show();}
      }, 1000)
    })
  $("#foodButton").click(function() {
    Sprite.foodUp();
    $("span#foodLevel").text(Sprite.foodLevel);
  })
  $("#thirstButton").click(function() {
    Sprite.thirstUp();
    $("span#thirstLevel").text(Sprite.thirstLevel);
  })
  $("#medButton").click(function() {
    Sprite.medicineUp();
    $("span#medlevel").text(Sprite.medLevel);
  })
  })
