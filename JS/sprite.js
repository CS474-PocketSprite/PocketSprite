
function getWidth(){
  var width = Screen.width;
}

var Sprite = {
    initialize: function (name) {
      this.name = name;
      this.foodLevel = 50;
      this.playLevel = 50;
      this.sleepLevel = 50;
    },
    timePasses: function () {
      this.foodLevel = this.foodLevel - 2;
      this.playLevel = this.playLevel - 2;
      this.sleepLevel = this.sleepLevel - 2;
    },
    isAlive: function () {
      if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
        return false;
      } else {
        return true;
      }
    },
    foodUp: function() {
      this.foodLevel = this.foodLevel + 5
    },
    playUp: function() {
      this.playLevel = this.playLevel + 5
    },
    sleepUp: function() {
      this.sleepLevel = this.sleepLevel + 5
    }
  }

var Sprite;

function getName(){
  var name = document.getElementById("firstname");

}

