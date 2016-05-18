$(document).ready(function(){
	var effectsTime = 500;
	$( "#main" ).on('click', '#carReviewC197', function() {
		$("button").removeClass("activeButton");
		$("#main").animate({opacity : 0.1}, function(){
		$(this).addClass("activeButton");
		}).animate({opacity : 1});
	});
	$( "#main" ).on('click', '#carCharacteristicsC197', function() {
		$("button").removeClass("activeButton");
		$("#main").animate({opacity : 0.1}, function(){
		$(this).addClass("activeButton");
	}).animate({opacity : 1});
  });
	$( "#main" ).on('click', '#carTestDriveC197', function() {
	
		$("button").removeClass("activeButton");
		$("#main").animate({opacity : 0.1}, function(){
		$(this).addClass("activeButton");
	}).animate({opacity : 1});
 });
	
});