var body = document.getElementsByTagName('body')[0];
	body.style.margin = "0px";

var i = 0;
function isNextRow (squareNum){
	if (squareNum % 9 === 0){
		return true;
	}
	return false;
}

var alpha = 1;

while (i<63) {
	var square = document.createElement("div");

		square.style.margin = "0px";
		square.style.width = "11.11%";
		square.style.paddingBottom = "11.11%";
		square.style.float = "left";
		square.style.display = "inline-block";

		if (isNextRow(i)){
			alpha = alpha - 0.1;
		}

		if (i % 2 === 0){
			square.style.backgroundColor = "rgba(255,0,0," + atlpha +")";
		} else {
			square.style.backgroundColor = "rgba(0,0,0," + alpha +")";
		};

	document.body.appendChild(square);
	i++;

};

