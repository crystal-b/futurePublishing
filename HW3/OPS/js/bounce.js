$(document).ready(function() {
	console.log("document loaded");
	var $animating = $("figure > img");
	$animating.on('click', function() {
		console.log("I am clicking to start the animation inside the function");
		$(this).toggleClass("bounce");
	});
		console.log("this is done animating");
});