function N_IO() {
    var x = document.getElementById("nav");
    var j = document.getElementById("ni");
    j.style.color = "red";
    var c = x.children;
    if (x.className == "nav") {
        x.className = "responsive";
        for(var i=1; i < c.length ; i++){
            c[i].style.display = "none";
        }
    }
    else {
        x.className = "nav";
        for(var i=1; i < c.length ; i++){
            c[i].style.display = "block";
        }
    }
}

