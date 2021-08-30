var textswitch;
function eventhandle(){
 var ctels = document.getElementById("controls").children;
 for(var c = 0; c < ctels.length; c++) {
  //console.log(ctels[c]);
  var ctrls = ctels[c].className;
  console.log(ctrls);
  document.getElementById(ctrls).addEventListener("keydown", function(e){
   var ctrl_val = this;
   e = e || window.event;
   //console.log(ctrl_val);
   if (e.keyCode == '38') {
    console.log("up arrow");
    ctrl_val.value = math.round(parseFloat(ctrl_val.value) + 0.001, 4);
   } else if (e.keyCode == '40') {
    console.log("down arrow");
    ctrl_val.value = math.round(parseFloat(ctrl_val.value) - 0.001, 4);
   } else if (e.keyCode == '37') {
    console.log("left arrow");
    ctrl_val.value = math.round(parseFloat(ctrl_val.value) - 1, 4);
   } else if (e.keyCode == '39') {
    console.log("right arrow");
    ctrl_val.value = math.round(parseFloat(ctrl_val.value) + 1, 4);
   };
   draw.ctx_ws = eval(document.getElementById("scalex").value);
   draw.ctx_hs = eval(document.getElementById("scaley").value);
   draw.x_shift = parseFloat(document.getElementById("shiftx").value);
   draw.y_shift = parseFloat(document.getElementById("shifty").value);
   start();
  }, true);
 }
}

// ==== MATH FUNCTIONS ====

function fun1(x) {var hello = 6*Math.exp(x); return hello;}
function fun2(x) {var hello1 = Math.pow((Math.tan((Math.cos(6/x)*Math.cos(2*Math.cos((x/Math.PI)))))),Math.sin(x)); return hello1;}
function fun3(x) {var hello2 = math.atan(math.sin(x)/math.abs(x)*math.pow(((math.cos(x))/(math.tan(x))),(math.sin(x)/math.atan(x)))/x)/(math.abs(x)*math.pow(((math.cos(x))/(math.tan(x))),(math.sin(x)/math.atan(x)))/x);return hello2;}
function fbns(x) {var hello3 = 1, i, fib = []; // Initialize array!
 fib[0] = 0;
 fib[1] = 1;
 for (var i = 2; i <= x; i++) {
  // Next fibonacci number = previous + one before previous
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
 };
 return fib[x-1];
}

function fibNumbers() {
 return [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
}

function continiusFib(a) {
 var b = fibNumbers(), c = Math.floor(a), d = Math.ceil(a);
 if (d >= b.length) return null;
 a = Math.pow(a - c, 1.15);
 return b[c] + (b[d] - b[c]) * a;
}


// ==== Elements ====

function elementsadd(){
 var elol = document.getElementById("els"), item_0 = document.querySelectorAll(".val_0"), item_1 = document.querySelectorAll(".val_1"), item_2 = document.querySelectorAll(".val_2"), ellist = "";
 var elid = elol.children.length;
 for(var i = 0; i <= elid; i++){ 
  ellist += "<div class=small_card id=" + (i+1) + "><b>" + (i+1) + "</b><input class=val_0 type=text placeholder=color";
  if(i == elid) {
   ellist += "></input><br><input class=val_1 type=text placeholder=function></input><br><input class=val_2 type=checkbox checked";
  } else {
   ellist += " value=" + item_0[i].value + "></input><br><input class=val_1 type=text placeholder=function value=" + item_1[i].value + "></input><br><input class=val_2 type=checkbox";
   if(item_2[i].checked) ellist += " checked";
  };
  ellist += "></input></div></li>";
 };
 elol.innerHTML = ellist;
}

function changer(text1,text2) {
 var t = text1;
 if(textswitch.value == text1) t = text2;
 textswitch.value = t;
 textswitch.innerHTML = t;
}

function dragElement(elmnt, elmnt2, x_loc, y_loc, dw_eval, move_eval, up_eval) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id)) {
  // if present, the header is where you move the DIV from:
  document.getElementById(elmnt.id).onmousedown = dragMouseDown;
 } else {
  // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX; 
  pos4 = e.clientY; 
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
  eval(dw_eval);
 }

 function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  if(y_loc) elmnt.style.top = pos4 + "px";
  else closeDragElement;
  if(x_loc == true && pos2 <= s_width) elmnt2.style.width = pos3 + "px";
  else closeDragElement;
  eval(move_eval);
 }

 function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
  eval(up_eval);
 }
}


// ==== Objects ====

class panels {
 constructor(name, new_width, new_height, x, y, pic) {
  this.panel = document.getElementById(name);
  this.panel_height = new_height;
  this.panel_width = new_width;
  this.new_penel_left = x;
  this.new_panel_top = y;
  this.old_panel_height;
  this.old_panel_width;
  this.old_penel_left;
  this.old_panel_top;
  this.pane = name;
  this.pic = pic;
 }

 pane_Info() {
  this.old_panel_height = this.panel.clientHeight;
  this.old_panel_width = this.panel.clientWidth;
  this.old_penel_left = this.panel.clientX;
  this.old_panel_top = this.panel.clientY;
  var pane_Information = [this.pane, this.old_panel_height, this.old_panel_width, this.old_penel_left, this.old_panel_top];
  return pane_Information;
 }

 edit_Pane() {
  console.log(this.pane_Info());
  document.getElementById(this.panel.id).style.height = this.panel_height;
  document.getElementById(this.panel.id).style.width = this.panel_width;
  document.getElementById(this.panel.id).style.left = this.new_penel_left;
  document.getElementById(this.panel.id).style.top = this.new_panel_top;
  return this.pane_Info();
 }
}