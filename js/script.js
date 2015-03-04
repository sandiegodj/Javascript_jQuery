$(document).ready(function() {
	populateGrid(50)
	//listen for buttons
	$('#borders').change( function() {
    	if($(this).is(':checked')) {
	    	$('.grid').css('outline', '1px solid black');
	    } 
	    else {
	        $('.grid').css('outline', "none");
	    }
	});

	$("#new").click(function() {
	newSize();
	});

	$("#normal").click(function() {
		normalColor();
	});

	$("#color").click(function() {
		colorOption();
	});

	$("#gradient").click(function() {
		gradient();
	});

	$("#random").click(function() {
		random();
	});

	$("#reset").click(function() {
		clear();
	});

});




//functions


newSize = function () {
	$("#container").empty();
		var input = prompt("Enter a new size between 1 and 100");
		if (input >= 1 && input <= 100){
			populateGrid(input);	
		}else {
			alert("Choose a better number");
		}
};

populateGrid = function (input) {
	var $container = $("#container")
	var size = $("#container").width() / input;
	
	for(var i = 0; i < input; i++){
		for( var j = 0; j < input; j++){
			$(container).append('<div class="grid"></div>');
		}
		$(container).append('<div class="grid_right"></div>');
	}
	$(".grid").css('width', size);
	$(".grid").css('height', size);

};

normalColor = function() {
	$(".grid").unbind();
	$(".grid").mouseenter(function() {
		$(this).css("background-color", "#000000");
	});
};

colorOption = function() {
	$(".grid").unbind();
	var userColor = prompt("Enter a hex value, or leave blank for Random color" , "#");
	// http://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
	var isHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(userColor);
	if(!isHexColor) {
		userColor = randomColor();
	}
	$(".grid").mouseover(function() {
		$(this).css("background-color", userColor);
	});
};

gradient  = function() {
	$(".grid").unbind();
	$(".grid").mouseenter(function() {
		var currentOpacity = $(this).css('opacity');
			if(currentOpacity >= 0){
				$(this).css('opacity', currentOpacity - 0.1);
			
			}
		});
};

random = function () {
	$(".grid").unbind();
	$(".grid").mouseenter(function() {
		$(this).css("background-color", randomColor());
	});
};

randomColor = function () {
		return '#'+ Math.floor(Math.random()*16777215).toString(16);		
};	
clear = function () {
	$(".grid").css("background-color", "#ffffff");
};