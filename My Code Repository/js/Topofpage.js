
function topofpage(){
 /* alert("This is the top of start"); */
  var C = document.getElementByClass("button1").children;
  for(var x = 0; x < C.length; x++){
    C[x].className +="button1";
    C[x].addEventListener("click", test, false);
    C[x].style.display = "none";

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
      showing = 0;
    }