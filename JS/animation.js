var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var myimage = new Image()
    myimage.src = "images/alien.png";
    var x = canvas.width / 2;
    var y = canvas.height - 60;
    var dx = 2
    var alienHeight = 160 * 1.5;
    var alienWidth = 100 * 1.25;
    var alienX = (canvas.width-alienWidth) / 2;
    var rightPressed = false;
    var leftPressed = false;
    var counterR = 0;
    var counterL = 0;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
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
    function drawAlien()
    {
        ctx.beginPath();
        ctx.drawImage(myimage, alienX, (canvas.height-alienHeight) /1.25, alienWidth, alienHeight);
        ctx.closePath();
    }
    function draw()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        drawAlien();
        if(rightPressed)
        {
            alienX += 6;
            if(((counterR % 24) >= 0) && ((counterR % 24) < 8))
            {
                myimage.src="images/alien_1.png";
            }
            else if(((counterR % 24) >= 8) && ((counterR % 24) < 16))
            {
                myimage.src="images/alien_2.png";
            }
            else if(((counterR % 24) >= 16) && ((counterR % 24) < 24))
            {
                myimage.src="images/alien_3.png";
            }
            /*
            else if(((counterR % 40) >= 30) && ((counterR % 40) < 40))
            {
                myimage.src="alien4.png";
            }
            */
            counterR += 1;
            counterL = 0;
            if(alienX + alienWidth > canvas.width)
            {
                alienX = canvas.width - alienWidth;
            }
        }
        else if(leftPressed)
        {
            alienX -= 6;
            if(((counterL % 24) >= 0) && ((counterL % 24) < 8))
            {
                myimage.src="images/alien1.png";
            }
            else if(((counterL % 24) >= 8) && ((counterL % 24) < 16))
            {
                myimage.src="images/alien2.png";
            }
            else if(((counterL % 24) >= 16) && ((counterL % 24) < 24))
            {
                myimage.src="images/alien3.png";
            }
            counterL += 1;
            counterR = 0;
            
            if(alienX < 0)
            {
                alienX = 0;
            }
        }
        else
        {
            myimage.src="images/alien.png";
            counterR = 0;
            counterL = 0;
        }
        x += dx;
    }
    setInterval(draw, 48)