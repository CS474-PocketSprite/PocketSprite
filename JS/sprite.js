

function getWidth(){
  var width = Screen.width;
}
function inputName(){
  var startButton =  document.getElementById("inputStart");
  this.style.display = 'absolute';
  
}

var Sprite = {
    initialize: function (name) {
      this.name = name;
      this.foodLevel = 50;
      this.playLevel = 50;
      this.sleepLevel = 50;
    },
    timePasses: function () {
      this.foodLevel = this.foodLevel - 1;
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
  $(document).ready(function(e){
    var width =  $(document).width();
    function goRight(){
      $('spriteContatiner').animate({
        left: width
    }, 5000, function() {
       setTimeout(goLeft, 50);
    });
  }
  function goLeft(){
      $("#spriteContainer").animate({
      left: 0
    }, 5000, function() {
       setTimeout(goRight, 50);
    });
  }
  setTimeout(goRight, 50);
});
    