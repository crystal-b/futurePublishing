/*
$(document).ready(function() {
	console.log("document loaded");
	$("figure").click(function() {
		console.log("I am inside the jquery function");
		$(".pic").animate({"left": "+=50px"}, "slow");
		console.log("I am animating");
	});
});
*/
/*
$(document).ready(function() {
	console.log("document loaded");
	var $animating = $("figure");
	$animating.on('click', function() {
		console.log("I am clicking to start the animation inside the function");
		$animating.animate( {
			marginLeft: '-=500'
		},
		3000);
		console.log("this is done animating");
	});
});
*/

$(document).ready(function() {
	console.log("document loaded");
	var $animating = $("figure > img");
	$animating.on('click', function() {
		console.log("I am clicking to start the animation inside the function");
		$animating.animate( {
			marginLeft: '-=500'
		},
		3000);
		console.log("this is done animating");
		$animating.on('click', function() {
			$(this).toggleClass("highlight");
		});
	});
});

/*

$(function() {
  var ids = '';
  var $listItems = $('h2');
  var $animation = $("#fill");

  $listItems.on('click', function() {
    console.log("I am clicking");
    $(function() {
      console.log("I appear!");
      $('#fill').removeClass('hidden');
      $('#fill').addClass('appear');
    });
    $(function() {
    	console.log("I am animating this");
    	$animation.animate( {
    		marginTop: '-=500'
    	},
    	3000);
    	console.log("this is done animating");
    });
  });
  */