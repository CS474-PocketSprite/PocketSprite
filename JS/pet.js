
function startScreen(){
    document.getElementById("screenSaverBackground").click();
    console.log("Button Clicked...");
}

function onStart(){
    document.getElementById('startButton').onclick = function(){
         
    }
}
// Create a Canvas
function initCanvas(){
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);   
    document.appendChild(x);
}