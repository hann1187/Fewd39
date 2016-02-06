$("body").fadeIn();
$(document).on("mouseenter", "p", function() {
	$(this).css("background-color", "yellow");
});
$(document).on("mouseleave", "p", function() {
	$(this).css("background-color", "white");
});
$(document).on("click", "h2", function() {
	$(this).animate({
		"margin-left": "+=20px",
			"opacity": "0.25"
	}, function() {
		$(".speech").animate({
			"opacity":"0.50"
		});
	});
});
$(document).on("click", "#switcher-default", function() {
	$("body").css("font-size", "62.5%");
});
$(document).on("click", "#switcher-large", function() {
	$("body").css("font-size", "100%");
});

$(document).on("click", "#switcher-small", function() {
	$("body").css("font-size", "40%");
});
$(document).on("keydown", function(event) {
	if(event.which === 37) {
		$("#switcher").finish().animate({
			"magin-left";"-=20px"
		});
} else if (event.which === 38) {
	$("#switcher").finish().animate({
		"margin-top":"-=20px"
	});
} else if (event.which === 39) {
	$("#switcher").finish().animate({
		"margin-left":"+=20px"
	});
} else if (event.which === 40) {
	$("#switcher").finish().animate({
		"margin-top":"+=20px"
		});
	}	
});




