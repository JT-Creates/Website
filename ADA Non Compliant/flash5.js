var i = 0;
function change() {
  var doc = document.getElementById("bakrnd");
  var color = ["red", "white","blue", "red", "white","blue", "red", "white","blue", "red", "white","blue", "red", "white","blue", "red", "white","blue"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);