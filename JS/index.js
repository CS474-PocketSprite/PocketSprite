
function getWidth(){
    var width = Screen.width;
}
function inputName(){
    var startButton =  document.getElementById("inputStart");
    this.style.display = 'absolute';
    
}

function nameFunc() {
    var name = prompt("Please input a name!", "J'onn J'onzz");
    document.getElementById("playerInfo").innerHTML = name + " the Pocket Alien";
}


