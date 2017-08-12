
var main = function()
{
	"use strict";
	var $img1 = $('<img id="logo" src="http://i1177.photobucket.com/albums/x359/rodrigomonroy/me2.png" alt= "another picture of me ">');
	var $img2 = $('<img id="logo" src="http://i1177.photobucket.com/albums/x359/rodrigomonroy/me1.png" alt = " a picture of me ">');
	var $p = $("<p>").text("hello");

	$("#logoContainer").mouseenter(function()
	{
		//$("*").css("color", "black");
		//$("#logoContainer").fadeOut("3000");
		$("#logo").remove();
		$("#logoContainer").append($img1);



	});


	$("#logoContainer").mouseleave(function()
		{
			$("#logo").remove();
		//	$("#logoContainer").fadeIn("3000");
			$("#logoContainer").append($img2);
		//	$("#logoContainer").fadeout("slow");
			//$("*").css("color", "white");
		//$("#logoContainer").empty();
		//$("img").css("color", "white");
		});


	setInterval(function()
	{
		$("#msg").css("color","red");
		$("#msg").fadeOut();
		$("#msg").fadeIn();
	},1250);






};
$(document).ready(main);
