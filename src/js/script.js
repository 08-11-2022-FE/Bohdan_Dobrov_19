// funtion changes menu size
function sidebar() {
    // variable for change menu size
    var x = document.getElementById("sidebar");
    if (x.classList.contains("sidebar-hidden")) {
        x.classList.add("sidebar-visible");
        x.classList.remove("sidebar-hidden");
    } else {
        x.classList.add("sidebar-hidden");
        x.classList.remove("sidebar-visible");
    }
}

// function changes menu size if device width is small

function myFunction(width) {
    var x = document.getElementById("sidebar");
    if (width.matches) { // If media query matches
        x.classList.add("sidebar-hidden");
        x.classList.remove("sidebar-visible");
    } else {
        x.classList.add("sidebar-visible");
        x.classList.remove("sidebar-hidden");
    }
  }

  var width = window.matchMedia("(max-width: 550px)");
  width.addListener(myFunction); 
  myFunction(width);

//function changes themes(dark/light)