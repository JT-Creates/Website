class draw {
 axes = {};
 prepair(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  return ctx;
 }
 constructor(){
  prepair();
  this.ctx = ctx;
  this.ctx_ws = 66.6;
  this.ctx_hs = 29.61;
  this.x_shift = 0.5;
  this.y_shift = 0.5;
  this.N_mode = true;
  this.g_resx = 0.1;
 }
 reset(){
  this.ctx_ws = 66.6;
  this.ctx_hs = 29.61;
  this.x_shift = 0.5;
  this.y_shift = 0.5;
  this.N_mode = true;
  this.g_resx = 0.1;
  document.getElementById("scalex").value = this.ctx_ws;
  document.getElementById("scaley").value = this.ctx_hs;
  document.getElementById("shiftx").value = this.x_shift;
  document.getElementById("shifty").value = this.y_shift;
  document.getElementById("g_res").value = this.g_resx;
 }
 clear(){
  this.ctx.fillStyle = "rgb(255, 255, 255)";
  this.ctx.fillRect(0, 0, canvas.width, canvas.height);
 }
 refresh_ctx(){
  this.axes.x0 = .5 + this.x_shift*canvas.width;
  this.axes.y0 = .5 + this.y_shift*canvas.height;
  this.axes.scalex = this.ctx_ws;
  this.axes.scaley = this.ctx_hs;
  this.axes.scalem = (canvas.width*canvas.height)/(this.ctx_ws*this.ctx_hs);
  this.axes.doNegativeX = this.N_mode;
  showAxes();
  this.ctx.fillStyle = "gray";
  this.ctx.font = "12px Arial";
  this.ctx.textAlign = "left";
  this.ctx.fillText("Programed by: JT", canvas.width - 128, canvas.height - 16);
  return;
 }
 initialize() {
  this.axes.x0 = .5 + this.x_shift*canvas.width;
  this.axes.y0 = .5 + this.y_shift*canvas.height;
  this.axes.scalex = this.ctx_ws;
  this.axes.scaley = this.ctx_hs;
  this.axes.scalem = this.axes.scalex / 3;
  this.axes.doNegativeX = this.N_mode;
  funGraph(fun1,"rgb(11,153,11)",1,"f(x) = 6*sin(x)", this.axes.scaley, 15,true, this.g_resx); 
  funGraph(fun2,"rgb(66,44,255)",1,"f(x) = 6*cos(2x)", this.axes.scaley, 30,true, this.g_resx);
 }
 plot_me() {
  // Adjust axis line relative to center
  this.axes.x0 = .5 + this.x_shift*canvas.width;
  this.axes.y0 = .5 + this.y_shift*canvas.height;
  // Adjust axis scale relative to canvas width
  this.axes.scalex = this.ctx_ws;
  this.axes.scaley = this.ctx_hs;
  this.axes.doNegativeX = this.N_mode;
  var elol = document.getElementById("els"), item_0 = document.querySelectorAll(".val_0"), item_1 = document.querySelectorAll(".val_1"), item_2 = document.querySelectorAll(".val_2");
  for(var i = 0; i < elol.children.length; i++){
   var fn = "y";
   if(item_2[i].checked == false) fn = "x";
   funGraph(function(x){return eval(item_1[i].value);}, item_0[i].value,1, fn + i +" = "+ item_1[i].value, this.axes.scaley, i*15+15,item_2[i].checked, this.g_resx);
  };
 }
 resizeCanvas() {
  var c_width = document.getElementById("r_col").clientWidth;
  if(c_width > 32) {
   if(canvas.width < c_width) canvas.width = c_width + 1;
   else canvas.width = c_width - 1;
   canvas.height = document.getElementById("main_container").clientHeight - 2;
  };
 }
 funGraph(func, color, thick, text_str, xtext, ytext, fn, dx) {
  var xx, yy, x0 = this.axes.x0, y0 = this.axes.y0, scale = this.axes.scalex;
  var iMax = Math.round((this.ctx.canvas.width-x0)/dx);
  var iMin = this.axes.doNegativeX ? Math.round(-x0/dx) : 0;
  this.ctx.beginPath();
  this.ctx.lineWidth = 1;
  this.ctx.strokeStyle = color;
  for (var i = iMin; i <= iMax; i += dx) {
   if (fn == true) {
    xx = dx*i;
    yy = this.axes.scaley*func(xx/this.axes.scalex);
    if (i==iMin) this.ctx.moveTo(x0+xx,y0-yy);
    else this.ctx.lineTo(x0+xx,y0-yy);
   } else {
    yy = dx*i;
    xx = this.axes.scalex*func(yy/this.axes.scaley);
    if (i==iMin) this.ctx.moveTo(x0+xx,y0-yy);
    else this.ctx.lineTo(x0+xx,y0-yy);
   };
  };
  this.ctx.stroke();
  this.ctx.fillStyle = "rgb(190,190,190)";
  this.ctx.fillRect(xtext-6,ytext-12,text_str.length*6, 15);
  this.ctx.font = "12px Arial";
  this.ctx.textAlign = "left";
  this.ctx.fillStyle = color;
  this.ctx.fillText(text_str, xtext, ytext);
 }
 showAxes() {
  var x0=this.axes.x0, w=this.ctx.canvas.width;
  var y0=this.axes.y0, h=this.ctx.canvas.height;
  var xmin = this.axes.doNegativeX ? 0 : x0;
  var cscalev= (y0 + x0)/this.axes.scalem;
  this.ctx.beginPath();
  this.ctx.strokeStyle = "rgb(180,180,180)"; 
  for(var mx = x0; mx <= w; mx += this.axes.scalex){
   this.ctx.moveTo(mx,y0+4); this.ctx.lineTo(mx,y0-4);  // X axis
   for(var nx = mx; nx <= mx + this.axes.scalex; nx += this.axes.scalem){
    this.ctx.moveTo(nx,y0-2); this.ctx.lineTo(nx,y0+2);  // X axis
   };
   this.ctx.fillStyle = "rgb(100,200,200)";
   this.ctx.font = "9px Arial";
   this.ctx.textAlign = "center";
   this.ctx.fillText(Math.round(((((mx)/this.axes.scalex)-(1/(2*this.axes.scalex)+1))),32)+1, x0+mx, y0-8);
  };
  for(var my = y0; my >= -h; my -= this.axes.scaley){ 
   this.ctx.moveTo(x0-4,my);    this.ctx.lineTo(x0+4,my);  // Y axis
   for(var ny = my; ny >= my - this.axes.scaley; ny -= this.axes.scalem){
    this.ctx.moveTo(x0-2,ny);    this.ctx.lineTo(x0-2,ny);  // Y axis
   };
   this.ctx.fillStyle = "rgb(100,200,200)";
   this.ctx.font = "9px Arial";
   this.ctx.textAlign = "left";
   this.ctx.fillText(Math.round(-((((my)/this.axes.scaley)-(1/(2*this.axes.scaley)))),32), x0+8, y0+my);
  };
  for(var mx = x0; mx >= -w; mx -= this.axes.scalex){
   this.ctx.moveTo(mx,y0+4); this.ctx.lineTo(mx,y0-4);  // X axis
   for(var nx = mx; nx >= mx - this.axes.scalex; nx -= this.axes.scalem){
    this.ctx.moveTo(nx,y0-2); this.ctx.lineTo(nx,y0+2);  // X axis
   };
   this.ctx.fillStyle = "rgb(100,200,200)";
   this.ctx.font = "9px Arial";
   this.ctx.textAlign = "center";
   this.ctx.fillText(Math.round(((((mx)/this.axes.scalex)-(1/(2*this.axes.scalex)+1))),32)+1, x0+mx, y0-8);
  };
  for(var my = y0; my <= h; my += this.axes.scaley){ 
   this.ctx.moveTo(x0-4,my);    this.ctx.lineTo(x0+4,my);  // Y axis
   for(var ny = my; ny <= my + this.axes.scaley; ny += this.axes.scalem){
    this.ctx.moveTo(x0-2,ny);    this.ctx.lineTo(x0-2,ny);  // Y axis
   };
  };
  this.ctx.strokeStyle = "rgb(128,128,128)"; 
  this.ctx.moveTo(xmin,y0); this.ctx.lineTo(w,y0);  // X axis
  this.ctx.moveTo(x0,0);    this.ctx.lineTo(x0,h);  // Y axis
  this.ctx.stroke();
  roundedRect(this.ctx, 0, 0, w, h, 9);
  roundedRect(this.ctx, .5, .5, w-1, h-1, 9);
  roundedRect(this.ctx, 1, 1, w-2, h-2, 9);
 }
}


// ==== Pre-programmed shapes ====

function roundedRect(ctx, x, y, width, height, radius) {
 ctx.beginPath();
 ctx.moveTo(x, y + radius);
 ctx.lineTo(x, y + height - radius);
 ctx.arcTo(x, y + height, x + radius, y + height, radius);
 ctx.lineTo(x + width - radius, y + height);
 ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
 ctx.lineTo(x + width, y + radius);
 ctx.arcTo(x + width, y, x + width - radius, y, radius);
 ctx.lineTo(x + radius, y);
 ctx.arcTo(x, y, x, y + radius, radius);
 ctx.stroke();
}

function drawSpiral(ctx, x, y, pointA, pointB) {
 var b = pointA, c = pointB;
 ctx.translate(x, y);
 b = Math.sqrt(((c.x - b.x) * (c.x - b.x)) + ((c.y - b.y) * (c.y - b.y)));
 d = 1 / Math.sqrt(((c.x - b.x) * (c.x - b.x)) + ((c.y - b.y) * (c.y - b.y)));
 c = Math.acos(c.x - b.x);
 0 > Math.asin(c.y - b.y) && (c = 2 * Math.PI - c);
 ctx.rotate(c);
 ctx.scale(b / 5, b / 5);
 var d = Math.PI / 100;
 ctx.moveTo(x, y);
 for (var e = 0; e < 50 * (fibNumbers().length - 1) ; e++) {
  var f = e * d, g = continiusFib(e / 50),
  h = Math.cos(f) * g,
  f = Math.sin(f) * g;
  ctx.lineTo(h, f);
 }
 ctx.scale(5 / b, 5 / b);
 ctx.rotate(-c);
 ctx.stroke();
}