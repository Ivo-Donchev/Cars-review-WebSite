function getHash()
{
    var url = window.location.href;
    var idx = url.indexOf("#");
    var hash = idx != -1 ? url.substring(idx+1) : "";
    return hash;
}
function menu(){
    
  if(getHash() == "BavariaYachts")
    {
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/yachtsModels.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
}
function vision50(){
    if(getHash() == "Vision50Review")
    {
        $('head').append('<script src="Yachts/vision50/controllers/yachtArticleController.js"></script>');
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/vision50/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Vision50Characteristic")
    {
        $('head').append('<script src="Yachts/vision50/controllers/yachtArticleController.js"></script>');
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/vision50/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Vision50TestDrive")
    {
    $('head').append('<script src="Yachts/vision50/controllers/yachtArticleController.js"></script>');
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/vision50/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
}
function cruiser55(){
    if(getHash() == "Cruiser55Review")
    {
        $('head').append('<script src="Yachts/cruiser55/controllers/yachtArticleController.js"></script>');
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/cruiser55/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Cruiser55Characteristic")
    {
        $('head').append('<script src="Yachts/cruiser55/controllers/yachtArticleController.js"></script>');
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/cruiser55/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Cruiser55TestDrive")
    {
    $('head').append('<script src="Yachts/cruiser55/controllers/yachtArticleController.js"></script>');
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Yachts/cruiser55/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
}
$(document).ready(function(){
    var xhttp1;
    var effectsTime = 500;
    menu();
    vision50();
    cruiser55();
    $( "#main" ).on('click', '#BavariaYachts', function() {
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Yachts/yachtsModels.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
     $( "#main" ).on('click', '#Vision50', function() {
    $('head').append('<script src="Yachts/vision50/controllers/yachtArticleController.js"></script>');

        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Yachts/vision50/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#Cruiser55', function() {
    $('head').append('<script src="Yachts/cruiser55/controllers/yachtArticleController.js"></script>');

        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Yachts/cruiser55/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    
});