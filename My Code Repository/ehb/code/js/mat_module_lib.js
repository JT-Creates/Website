var t_sw;
function elQrs(prop){return document.querySelectorAll(prop);}
function elById(name){return document.getElementById(name);}
function eventhandle(){
 var ctels = elById("controls").children;
 for(var c = 0; c < ctels.length; c++) {
  ctels[c].addEventListener("keydown", function(e){
   e = e || window.event;
   var ctrl_val = this, i_val = parseFloat(ctrl_val.value), inc = 0;
   switch (e.keyCode) {
   case 38: inc = .001; break;
   case 40: inc = -.001; break;
   case 37: inc = -1; break;
   case 39: inc = 1; break;
   };
   ctrl_val.value = math.round((i_val + inc), 4);
   start();
  }, true);
 }
}

// ==== Elements ====

function elementsadd(){
 var elol = elById("els"), item_0 = elQrs(".val_0"), item_1 = elQrs(".val_1"), item_2 = elQrs(".val_2"), itms = "", elid = elol.children.length;
 for(var i = 0; i <= elid; i++){ 
  var st = ["<div class=small_card id=" + (i+1) + "><b>" + (i+1) + "</b><input class=val_0 type=text placeholder=color value="," ","></input><br><input class=val_1 type=text placeholder=function value="," ","></input><br><input class=val_2 type=checkbox"," ","></input></div></li>"];
  if(i != elid) {
   st[1] = item_0[i].value;
   st[3] = item_1[i].value;
   if(item_2[i].checked) st[5] = " checked";
  };
  itms += st.join("");
 };
 elol.innerHTML = itms;
}


function resize(elem1, elem2, mode) {
    var element = elById(elem1);
    c_width = elById(elem2).clientWidth;
    if(mode == 1){
        if(element.clientWidth > c_width + 8) element.style.width = element.clientWidth + 1;
        else if(element.clientWidth < c_width - 8) element.style.width = element.clientWidth - 1;
    }
    else if (mode == 2) {
        element.style.height = elById("main_container").clientHeight - 1;
    }
    else {
        if(element.clientWidth > c_width + 2) element.style.width = element.clientWidth + 1;
        else if(element.clientWidth < c_width - 2) element.style.width = element.clientWidth - 1;
        element.style.height = elById("main_container").clientHeight - 1;
    }
    console.log(element.style.width);
}

function changer(text1,text2) {
 var t = text1;
 if(t_sw.value == text1) t = text2;
 t_sw.value = t;
 t_sw.innerHTML = t;
}

function dragElement(elmnt, elmnt2, x_loc, y_loc, dw_eval, move_eval, up_eval) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (elById(elmnt.id)) {
  // if present, the header is where you move the DIV from:
  elById(elmnt.id).onmousedown = dragMouseDown;
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