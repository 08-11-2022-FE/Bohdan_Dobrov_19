function sidebar() {
    var x = document.getElementById("sidebar");
    if (x.classList.contains("sidebar-hidden")) {
        x.classList.add("sidebar-visible");
        x.classList.remove("sidebar-hidden");
    } else {
        x.classList.add("sidebar-hidden");
        x.classList.remove("sidebar-visible");
    }
}