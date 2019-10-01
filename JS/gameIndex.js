var btn = document.getElementsByClassName('button-group');
for (var i = 0; i < btn.length; i++){
    console.log("button is"+i);
    if(btn[i]){
	btn[i].addEventListener('click', (e)=> {
		e.preventDefault();
		console.log("button clicke");
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
	    });
    }
}