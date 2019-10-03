var alien = document.getElementById('alien');
var cont = document.getElementById('container');
var pos = 0;
var counterL = 0;
var counterR = 0;
/*
document.addEventListener("keydown", keyDownHandler, false);
docuemtn.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e)
{
    if(e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft")
    {
        leftPressed = true;
    }
}
function keyUpHandler(e)
{
    if(e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft")
    {
        leftPressed = false;
    }
}
*/
function move(e) {
    if (e.keyCode == 39) {
        pos += 32;
        alien.style.left = pos + 'px';
        counterR += 1;
        counterL = 0;
        if (pos + (alien.width / 2) > screen.width) {
            pos = screen.width - alien.width / 2;
        }

        if (((counterR % 12) >= 0) && ((counterR % 12) < 4)) {
            alien.src = "alien_1.png";
        }
        else if (((counterR % 12) >= 4) && ((counterR % 12) < 8)) {
            alien.src = "alien_2.png";
        }
        else if (((counterR % 12) >= 8) && ((counterR % 12) < 12)) {
            alien.src = "alien_3.png";
        }
    }
    if (e.keyCode == 37) {
        pos -= 32;
        alien.style.left = pos + 'px';
        counterR = 0;
        counterL += 1;
        if (pos < 0) {
            pos = 0;
        }
        if (((counterL % 12) >= 0) && ((counterL % 12) < 4)) {
            alien.src = "alien1.png";
        }
        else if (((counterL % 12) >= 4) && ((counterL % 12) < 8)) {
            alien.src = "alien2.png";
        }
        else if (((counterL % 12) >= 8) && ((counterL % 12) < 12)) {
            alien.src = "alien3.png";
        }
    }
}

document.onkeydown = move;