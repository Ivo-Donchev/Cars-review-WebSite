$(document).ready(function(){
	var xhttp1,xhttp2, xhttp3;
	var effectsTime = 500;
	$( "#main" ).on('click', '#carReviewAventador', function() {
		$("button").removeClass("activeButton");
		$("#main").animate({opacity : 0.1}, function(){
		$(this).addClass("activeButton");
		 xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function() {
    if (xhttp1.readyState == 4 && xhttp1.status == 200) {
      $("#main").html(xhttp1.responseText);
    }
  };
  xhttp1.open("GET", "Lamborghini/aventador/wow.html", true);
  xhttp1.send();
		}).animate({opacity : 1});
	});
	$( "#main" ).on('click', '#carCharacteristicsAventador', function() {
		$("button").removeClass("activeButton");
		$("#main").animate({opacity : 0.1}, function(){
		$(this).addClass("activeButton");
		  xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
      $("#main").html(xhttp2.responseText);
    }
  };
  xhttp2.open("GET", "Lamborghini/aventador/characteristic.html", true);
  xhttp2.send();
  }).animate({opacity : 1});
  });
	$( "#main" ).on('click', '#carTestDriveAventador', function() {
	
		$("button").removeClass("activeButton");
		$("#main").animate({opacity : 0.1}, function(){
		$(this).addClass("activeButton");
	 xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (xhttp3.readyState == 4 && xhttp3.status == 200) {
      $("#main").html(xhttp3.responseText);
    }
  };
  xhttp3.open("GET", "Lamborghini/aventador/testDrive.html", true);
  xhttp3.send();
  }).animate({opacity : 1});
 });
	
});