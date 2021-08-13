var textswitch;
function eventhandle(){
var ctns = document.getElementById("controls");
var ctels = ctns.children;

for(var c = 0; c < ctels.length; c++) {
  console.log(ctels[c]);
  var ctrls = ctels[c].className;
  console.log(ctrls);
  var control_val = document.getElementById(ctrls);
  control_val.addEventListener("keydown", function(e){key_check(e, ctrls);});
  }
}
function key_check(e, nam){
    var ctrl_val = document.getElementById(nam);
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log("up arrow");
        ctrl_val.value = math.round(parseFloat(ctrl_val.value) + 0.001, 4);
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log("down arrow");
        ctrl_val.value = math.round(parseFloat(ctrl_val.value) - 0.001, 4);
    }
    else if (e.keyCode == '37') {
       // left arrow
        console.log("left arrow");
        ctrl_val.value = math.round(parseFloat(ctrl_val.value) - 1, 4);
    }
    else if (e.keyCode == '39') {
       // right arrow
        console.log("right arrow");
        ctrl_val.value = math.round(parseFloat(ctrl_val.value) + 1, 4);
    }
  }

// ==== MATH FUNCTIONS ====

function fun1(x) {var hello = 6*Math.exp(x); return hello;}
function fun2(x) {var hello1 = Math.pow((Math.tan((Math.cos(6/x)*Math.cos(2*Math.cos((x/Math.PI)))))),Math.sin(x)); return hello1;}
function fun3(x) {var hello2 = math.atan(math.sin(x)/math.abs(x)*math.pow(((math.cos(x))/(math.tan(x))),(math.sin(x)/math.atan(x)))/x)/(math.abs(x)*math.pow(((math.cos(x))/(math.tan(x))),(math.sin(x)/math.atan(x)))/x);return hello2;}

// ==== Elements ====

function elementsadd(){
var elol = document.getElementById("els");
var elid = elol.children.length;
elol.innerHTML += "<li id="+elid+"><div><ul><li>"+
"<input class=val_0 type=text placeholder=color></input></li><li>"+
"<input class=val_1 type=text placeholder=function></input></li><li>"+
"<input class=val_2 type=checkbox checked></input></li><li>"+
"<button id='name' onclick='draw.plot_me()'>submit</button>"+
"</li></ul></div></li>";
}

function changer(text1,text2) {
 if(textswitch.value == text1) {
  textswitch.value = text2;
  textswitch.innerHTML = text2;
 } else {
  textswitch.value = text1;
  textswitch.innerHTML = text1;
 };
}

// ==== Objects ====