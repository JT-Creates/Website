function start(){
  var C = document.getElementById("carrot").children;
  for(var x = 0; x < C.length; x++){
    C[x].className +="imgtest";
    C[x].addEventListener("click", test, false);
    C[x].style.display = "none";
  }

  C[0].style.display = "block";

var showing = 0;
  function test(){
    if (showing == 0){
      C[0].style.display = "none";
      C[1].style.display = "block";
      showing =1;
    }
    else if (showing == 1) {
      C[1].style.display = "none";
      C[2].style.display = "block";
      showing = 2 ;
    }
    else if (showing == 2) {
      C[2].style.display = "none";
      C[3].style.display = "block";
      showing = 3;
    }

    else if (showing == 3) {
      C[3].style.display = "none";
      C[4].style.display = "block";
      showing = 4;
    }
    else if (showing == 4) {
      C[4].style.display = "none";
      C[5].style.display = "block";
      showing = 5;
    }
    else if (showing == 5) {
      C[5].style.display = "none";
      C[6].style.display = "block";
      showing = 6;
    }
    else if (showing == 6) {
      C[6].style.display = "none";
      C[7].style.display = "block";
      showing = 7;
    }
    else if (showing == 7) {
      C[7].style.display = "none";
      C[8].style.display = "block";
      showing = 8;
    }
    else if (showing == 8) {
      C[8].style.display = "none";
      C[0].style.display = "block";
      showing = 0;
    }
  }
}





































/*  alert("This is the top of start");  */
