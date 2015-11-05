var body = document.getElementsByTagName('body')[0];
	body.style.margin = "0px";



window.setInterval(generateNewBoard, 2000);

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    console.log(color);
    return color;
}


function generateNewBoard() {
	var i = 0;
	document.body.innerHTML = '';
	while (i<63) {
		var square = document.createElement("div");

			square.style.margin = "0px";
			square.style.width = "11.11%";
			square.style.paddingBottom = "11.11%";
			square.style.float = "left";
			square.style.display = "inline-block";
			square.style.backgroundColor = getRandomColor();
		document.body.appendChild(square);
		i++;
		console.log("single square test");
	}
	console.log("test");
}

