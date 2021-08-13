var showing = 0
function start(){
startInterval();
  var C = document.getElementById("carrot").children;
  for(var x = 0; x < C.length; x++){
    C[x].className +="imgtest";
    C[x].style.display = "none";
  }

  C[0].style.display = "block";
//  document.getElementById("program_button").addEventListener()
}
  function test(i){
  var C = document.getElementById("carrot").children;
    showing += i;
    if (showing < 0){
      C[0].style.display = "none";
      C[C.length-1].style.display = "block";
      showing = C.length-1;
    }
    else if (showing >= C.length) {
      C[C.length-1].style.display = "none";
      C[0].style.display = "block";
      showing = 0;
    }
    else {
      C[showing-i].style.display = "none";
      C[showing].style.display = "block";
    }
  }
