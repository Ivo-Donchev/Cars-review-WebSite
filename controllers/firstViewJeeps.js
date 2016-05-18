
$(document).ready(function(){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      $("#main").html(xhttp.responseText);
    }
  };
  xhttp.open("GET", "jeepsMain.html", true);
  xhttp.send();
    
});