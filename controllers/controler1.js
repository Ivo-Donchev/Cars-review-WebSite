function getHash()
{
    var url = window.location.href;
    var idx = url.indexOf("#");
    var hash = idx != -1 ? url.substring(idx+1) : "";
    return hash;
}
function PorschePanamera()
{
    if(getHash() == "PorschePanameraReview")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Porsche/PanameraTurboS/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    else if(getHash() == "PorschePanameraCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Porsche/PanameraTurboS/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    else if(getHash() == "PorschePanameraTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Porsche/PanameraTurboS/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }

}
function PorscheCayman()
{
    if(getHash() == "PorscheCaymanReview")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Porsche/Cayman/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    if(getHash() == "PorscheCaymanCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Porsche/Cayman/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    if(getHash() == "PorscheCaymanTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Porsche/Cayman/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }

}
function LamborghiniAventador()
{
    if(getHash() == "LamborghiniAventadorReview")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
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

    }
    else if(getHash() == "LamborghiniAventadorCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Lamborghini/aventador/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "LamborghiniAventadorTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Lamborghini/aventador/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    
}
function LamborghiniGallardo()
{
    if(getHash() == "LamborghiniGallardoReview")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Lamborghini/gallardo/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    else if(getHash() == "LamborghiniGallardoCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Lamborghini/gallardo/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "LamborghiniGallardoTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Lamborghini/gallardo/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    
}
function MercedesC197()
{
    if(getHash() == "MercedesC197Review")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Mercedes/C197/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    else if(getHash() == "MercedesC197Characteristic")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Mercedes/C197/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "MercedesC197TestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Mercedes/C197/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    
}
function MercedesC217()
{
    if(getHash() == "MercedesC217Review")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Mercedes/SClass/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    else if(getHash() == "MercedesC217Characteristic")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Mercedes/SClass/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "MercedesC217TestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "Mercedes/SClass/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    
}
function BMW335i()
{
    if(getHash() == "BMW335iReview")
    {
        var xhttp1;
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "BMW/335i/wow.html", true);
        xhttp1.send();
        }).animate({opacity : 1});

    }
    else if(getHash() == "BMW335iCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "BMW/335i/characteristic.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "BMW335iTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", "BMW/335i/testDrive.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    
}
function menus()
{
    if(getHash() == "BMW")
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
        xhttp1.open("GET", "BMW/BMWModels.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Mercedes")
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
        xhttp1.open("GET", "Mercedes/MercedesModels.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Lamborghini")
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
        xhttp1.open("GET", "Lamborghini/LamborghiniModels.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    else if(getHash() == "Porsche")
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
        xhttp1.open("GET", "Porsche/PorscheModels.html", true);
        xhttp1.send();
        }).animate({opacity : 1});
    }
    
    
}

$(document).ready(function(){
    var xhttp1;
    var effectsTime = 500;
    PorscheCayman();
    PorschePanamera();
    LamborghiniAventador();
    LamborghiniGallardo();
    MercedesC197();
    MercedesC217();
    BMW335i();
    menus();
    $( "#main" ).on('click', '#Mercedes', function() {
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Mercedes/mercedesModels.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#Lamborghini', function() {
        $("#main").animate({opacity : 0.1}, function(){
            $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Lamborghini/lamborghiniModels.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#BMW', function() {
        $("#main").animate({opacity : 0.1}, function(){
            $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "BMW/BMWModels.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
     $( "#main" ).on('click', '#Porsche', function() {
        $("#main").animate({opacity : 0.1}, function(){
            $(this).addClass("activeButton");
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Porsche/PorscheModels.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#C197', function() {
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Mercedes/C197/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });

    $( "#main" ).on('click', '#Aventador', function() {
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
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
    $( "#main" ).on('click', '#Gallardo', function() {
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Lamborghini/gallardo/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#C217', function() {
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Mercedes/SClass/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#Panamera', function() {
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Porsche/PanameraTurboS/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
	$( "#main" ).on('click', '#Cayman', function() {
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "Porsche/Cayman/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
    $( "#main" ).on('click', '#335i', function() {
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("#main").animate({opacity : 0.1}, function(){
            xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
                if (xhttp1.readyState == 4 && xhttp1.status == 200) {
                    $("#main").html(xhttp1.responseText);
                }
            };
            xhttp1.open("GET", "BMW/335i/wow.html", true);
            xhttp1.send();
        }).animate({opacity : 1});
    });
});

