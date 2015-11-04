var body = document.getElementsByTagName('body')[0];
	body.style.margin = "0px";

var i = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    console.log(color);
    return color;
}

while (i<63) {
	var square = document.createElement("div");

		square.style.margin = "0px";
		square.style.width = "11.11%";
		square.style.paddingBottom = "11.11%";
		square.style.float = "left";
		square.style.display = "inline-block";
		square.style.background = getRandomColor();
	document.body.appendChild(square);
	i++;

};

