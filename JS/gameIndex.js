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

var Sprite = {

	initialize: function (name) {
	  this.name = name;
	  this.isSleeping = false;
	  this.foodLevel = 50;
	  this.thirstLevel = 50;
	  this.medLevel = 50;
	},
  
	calcHealthLevel: function () {
	  var tempHealthLevel = (this.foodLevel + this.thirstLevel + this.restedLevel) / 3;
	  if ((this.healthLevel >= 15) && (tempHealthLevel >= 15)) {
		return 15;
	  } else {
		return ((tempHealthLevel + this.healthLevel)/2);
	  };
	},
  
  // Action functions - need buttons
  
	feed: function () {
	  if (this.foodLevel < 15) {
		this.foodLevel++;
	  };
	},
  
	play: function () {
	  if (this.thirstLevel < 15) {
		this.thirstLevel++;
	  };
	},
  
	medicine: function () {
	  if (this.healthLevel < 15) {
		this.healthLevel++;
	  };
	},
  
  // State variable readers
  
	isAlive: function () {
	  if ((this.healthLevel < 2) || (this.foodLevel === 0)) {
		return false;
	  } else {
		return true;
	  };
	},
  
  // Warning functions
	foodWarning: function () {
	  var foodWarning = false;
		if (this.foodLevel < 15) {
		  foodWarning = true;
		};
	  return foodWarning;
	},
  
	thirstWarning: function () {
	  var happinessWarning = false;
		if (this.thirstLevel < 15) {
		  happinessWarning = true;
		};
	  return happinessWarning;
	},
  
	medWarning: function () {
	  var healthWarning = false;
		if (this.healthLevel < 15) {
		  healthWarning = true;
		};
	  return healthWarning;
	},
  
  // Time passes
  
	timePasses: function (intervalID) {
	  if (this.isSleeping) {
		if (this.restedLevel < 15) {
		  this.restedLevel++;
		};
		if (this.thirstLevel > 0) {
		  this.thirstLevel--;
		};
	  } else { // is awake
		if (this.foodLevel > 0) {
		  this.foodLevel--;
		};
		if (this.restedLevel > 0) {
		  this.restedLevel--;
		};
		if (this.thirstLevel > 0) {
		  this.thirstLevel--;
		};
	  };
	  this.healthLevel = this.calcHealthLevel();
	}
}
$("#food-button").click(function() {
	Sprite.foodUp();
	$("span#food-level").text(tamagotchi.foodLevel);
  })
  $("#play-button").click(function() {
	Sprite.playUp();
	$("span#play-level").text(tamagotchi.playLevel);
  })
  $("#sleep-button").click(function() {
	Sprite.sleepUp();
	$("span#sleep-level").text(tamagotchi.sleepLevel);
  })
  function getName(){
	var name = document.getElementById("firstname");
  
  }
  
  