var i = 0;
function change() {
  var doc = document.getElementById("backround");
  var color = [ "red", "green", "blue", "red", "green", "blue", "red", "green", "blue", "red", "green", "blue", "red", "green", "blue", "red", "green", "blue"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);