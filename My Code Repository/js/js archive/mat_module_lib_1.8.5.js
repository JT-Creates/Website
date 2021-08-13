var textswitch;
function eventhandle(){
 var ctels = document.getElementById("controls").children;
 for(var c = 0; c < ctels.length; c++) {
  //var ctrls = ctels[c].className;
  ctels[c].addEventListener("keydown", function(e){
   var ctrl_val = this;
   e = e || window.event;
   var i_val = parseFloat(ctrl_val.value);
   switch (e.keyCode) {
   case 38:
    i_val = math.round(i_val + .001, 4);
    break;
   case 40:
    i_val = math.round(i_val - .001, 4);
    break;
   case 37:
    i_val = math.round(i_val - 1, 4);
    break;
   case 39:
    i_val = math.round(i_val + 1, 4);
    break;
   };
   ctrl_val.value = i_val;
   start();
  }, true);
 }
}

// ==== Elements ====

function elementsadd(){
 var elol = document.getElementById("els"), item_0 = document.querySelectorAll(".val_0"), item_1 = document.querySelectorAll(".val_1"), item_2 = document.querySelectorAll(".val_2"), ellist = "";
 var elid = elol.children.length;
 for(var i = 0; i <= elid; i++){ 
  ellist += "<div class=small_card id=" + (i+1) + "><b>" + (i+1) + "</b><input class=val_0 type=text placeholder=color value=";
  if(i != elid) ellist += item_0[i].value;
  ellist += "></input><br><input class=val_1 type=text placeholder=function value=";
  if(i != elid) ellist += item_1[i].value;
  ellist += "></input><br><input class=val_2 type=checkbox";
  if(i != elid) if(item_2[i].checked) ellist += " checked";
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
 constructor(name) {
  this.panel = document.getElementById(name)
  this.old_panel_height;
  this.old_panel_width;
  this.old_penel_left;
  this.old_panel_top;
  this.pane = name;
  this.pic;
 }

 pane_Info() {
  this.old_panel_height = this.panel.clientHeight;
  this.old_panel_width = this.panel.clientWidth;
  this.old_penel_left = this.panel.clientX;
  this.old_panel_top = this.panel.clientY;
  var pane_Information = [this.pane, this.old_panel_height, this.old_panel_width, this.old_penel_left, this.old_panel_top];
  return pane_Information;
 }

 edit_Pane(new_width, new_height, x, y, pic) {
  console.log(this.pane_Info());
  this.panel.style.height = new_height;
  this.panel.style.width = new_width;
  this.panel.style.left = x;
  this.panel.style.top = y;
  return this.pane_Info();
 }
}