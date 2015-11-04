var body = document.getElementsByTagName('body')[0];
	body.style.margin = "0px";

var i = 0;

while (i<63) {
	var square = document.createElement("div");

		square.style.margin = "0px";
		square.style.width = "11.11%";
		square.style.paddingBottom = "11.11%";
		square.style.float = "left";
		square.style.display = "inline-block";

		if (i % 2 === 0){
			square.style.backgroundColor = "black";
		} else {
			square.style.backgroundColor = "red";
		}
	document.body.appendChild(square);
	i++;

};

