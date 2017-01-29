var count = 20;
var xSize = 600;
var color = "#000";
var borColor ="#eee";
var contColor = "#fff";
var paint = 0;
var tutti = 0;
var grad = 0;
var cGrad;
var gradDirection;

var xDiv = xSize/count;
paintGrid();

function paintGrid() {
	var container = $(".container");
	container.empty();
	for (var i = 0; i < count; i++) {
		for (var j = 0; j < count; j++) {
			container.append("<div></div>");
		}
	}
	$(".container").find("div").addClass("basic");
	$(".basic").css("width", xDiv + "px").css("height", xDiv + "px");
	if ($("input").is(':checked')) {
		$(".basic").css("border-color", borColor);
	} else {
		$(".basic").css("border-color", contColor);
	}

	$(".basic").on("mousedown", function() {
		paint = 1;
	});
	$(".basic").on("mouseup", function() {
		paint = 0;
	});
	$(".basic").on("mouseenter", function () {
		if (paint) {
			if (tutti) {
				randomColor();
			}
			if (grad) {
				changeGradient();
			}
			$(this).css("background-color", color)
			.css("border-color", color);

		}
	});
}

function gridSize() {
	var countTemp;
	do {
		countTemp = +prompt("Grid size (10, 20, 30, 60)?", "20");
	} while (!(countTemp == 10 || countTemp == 20 || 
		     countTemp == 30 || countTemp == 60));
	count = countTemp; 
	xDiv = xSize/count;
	paintGrid();
}

function changeColor() {
	tutti = 0;
	grad = 0;
	randomColor();
}

function randomColor() {
	var cRed = Math.floor(Math.random()*256);
	var cGreen = Math.floor(Math.random()*256);
	var cBlue = Math.floor(Math.random()*256);
	color = "rgb(" + cRed + "," + cGreen + "," + cBlue + ")";
}

function clearGrid() {
	paintGrid();
}

function tuttiFrutti() {
	tutti = 1;
	grad = 0;
}

function gradient() {
	tutti = 0;
	grad = 1;
	cGrad = 250;
	gradDirection = 1;
}

function changeGradient() {
	color = "rgb(" + cGrad + "," + cGrad + "," + cGrad + ")";

	if (gradDirection) {
		cGrad -= 25;
	} else {
		cGrad += 25;
	}
	if (cGrad === -25) {
		cGrad = 0;
		gradDirection = 0;
	}
	if (cGrad === 275) {
		cGrad = 250;
		gradDirection = 1;
	}
}

function selectColor() {
	tutti = 0;
	grad = 0;
	color = $("select").val();
}

function showBorders() {
	if ($("input").is(':checked')) {
		$(".basic").css("border-color", borColor);
	} else {
		$(".basic").each(function() {
			var backColor = $(this).css("background-color");
			$(this).css("border-color", backColor);
		});
	}
}


