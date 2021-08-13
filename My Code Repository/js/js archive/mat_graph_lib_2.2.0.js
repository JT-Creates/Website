var draw = {
 ctx_ws : ctx_ws = 0.5,
 ctx_hs : ctx_hs = 0.5,
 x_shift : x_shift = 0.5,
 y_shift : y_shift = 0.5,
 N_mode : N_mode = true,
 reset : function(){
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
 },
 clear : function(){
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
 },
 refresh_ctx : function(){
  draw.ctx_ws = eval(document.getElementById("scalex").value);
  draw.ctx_hs = eval(document.getElementById("scaley").value);
  draw.x_shift = parseFloat(document.getElementById("shiftx").value);
  draw.y_shift = parseFloat(document.getElementById("shifty").value);
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  axes.x0 = .5 + this.x_shift*canvas.width;
  axes.y0 = .5 + this.y_shift*canvas.height;
  axes.scalex = this.ctx_ws;
  axes.scaley = this.ctx_hs;
  axes.scalem = (canvas.width*canvas.height)/(this.ctx_ws*this.ctx_hs);
  axes.doNegativeX = this.N_mode;
  showAxes(ctx,axes);
  ctx.fillStyle = "gray";
  ctx.font = "12px Arial";
  ctx.textAlign = "left";
  ctx.fillText("Programed by: JT", canvas.width - 128, canvas.height - 16);
  return;
 },
 initialize : function() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  axes.x0 = .5 + this.x_shift*canvas.width;
  axes.y0 = .5 + this.y_shift*canvas.height;
  axes.scalex = this.ctx_ws;
  axes.scaley = this.ctx_hs;
  axes.scalem = axes.scalex / 3;
  axes.doNegativeX = this.N_mode;
  funGraph(ctx,axes,fun1,"rgb(11,153,11)",1,"f(x) = 6*sin(x)", axes.scaley, 15,true, this.g_resx); 
  funGraph(ctx,axes,fun2,"rgb(66,44,255)",1,"f(x) = 6*cos(2x)", axes.scaley, 30,true, this.g_resx);
 },
 plot_me : function() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  // Adjust axis line relative to center
  axes.x0 = .5 + this.x_shift*canvas.width;
  axes.y0 = .5 + this.y_shift*canvas.height;
  // Adjust axis scale relative to canvas width
  axes.scalex = this.ctx_ws;
  axes.scaley = this.ctx_hs;
  axes.doNegativeX = this.N_mode;
  var elol = document.getElementById("els"), item_0 = document.querySelectorAll(".val_0"), item_1 = document.querySelectorAll(".val_1"), item_2 = document.querySelectorAll(".val_2");
  for(var i = 0; i < elol.children.length; i++){
   var fn = "y";
   if(item_2[i].checked == false) fn = "x";
   funGraph(ctx,axes,function(x){return eval(item_1[i].value);}, item_0[i].value,1, fn + i +" = "+ item_1[i].value, axes.scaley, i*15+15,item_2[i].checked, this.g_resx);
  };
 },
 resizeCanvas : function() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d"), c_width = document.getElementById("r_col").clientWidth;
  if(c_width > 32) {
   if(canvas.width > c_width) canvas.width = c_width + 1;
   else canvas.width = c_width - 1;
   canvas.height = document.getElementById("main_container").clientHeight - 2;
  };
 }
}

function funGraph(ctx, axes, func, color, thick, text_str, xtext, ytext, fn, dx) {
 var xx, yy, x0 = axes.x0, y0 = axes.y0, scale = axes.scalex;
 var iMax = Math.round((ctx.canvas.width-x0)/dx);
 var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
 ctx.beginPath();
 ctx.lineWidth = 1;
 ctx.strokeStyle = color;
 for (var i = iMin; i <= iMax; i += dx) {
  if (fn == true) {
   xx = dx*i;
   yy = axes.scaley*func(xx/axes.scalex);
   if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
   else ctx.lineTo(x0+xx,y0-yy);
  } else {
   yy = dx*i;
   xx = axes.scalex*func(yy/axes.scaley);
   if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
   else ctx.lineTo(x0+xx,y0-yy);
  };
 };
 ctx.stroke();
 ctx.fillStyle = "rgb(190,190,190)";
 ctx.fillRect(xtext-6,ytext-12,text_str.length*6, 15);
 ctx.font = "12px Arial";
 ctx.textAlign = "left";
 ctx.fillStyle = color;
 ctx.fillText(text_str, xtext, ytext);
}

// ==== Pre-programmed shapes ====

function showAxes(ctx,axes) {
 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;
 var xmin = axes.doNegativeX ? 0 : x0;
 var cscalev= (y0 + x0)/axes.scalem;
 ctx.beginPath();
 ctx.strokeStyle = "rgb(180,180,180)"; 
 for(var mx = x0; mx <= w; mx += axes.scalex){
  ctx.moveTo(mx,y0+4); ctx.lineTo(mx,y0-4);  // X axis
  for(var nx = mx; nx <= mx + axes.scalex; nx += axes.scalem){
   ctx.moveTo(nx,y0-2); ctx.lineTo(nx,y0+2);  // X axis
  };
  ctx.fillStyle = "rgb(100,200,200)";
  ctx.font = "9px Arial";
  ctx.textAlign = "center";
  ctx.fillText(Math.round(((((mx)/axes.scalex)-(1/(2*axes.scalex)+1))),32)+1, x0+mx, y0-8);
 };
 for(var my = y0; my >= -h; my -= axes.scaley){ 
  ctx.moveTo(x0-4,my);    ctx.lineTo(x0+4,my);  // Y axis
  for(var ny = my; ny >= my - axes.scaley; ny -= axes.scalem){
   ctx.moveTo(x0-2,ny);    ctx.lineTo(x0-2,ny);  // Y axis
  };
  ctx.fillStyle = "rgb(100,200,200)";
  ctx.font = "9px Arial";
  ctx.textAlign = "left";
  ctx.fillText(Math.round(-((((my)/axes.scaley)-(1/(2*axes.scaley)))),32), x0+8, y0+my);
 };
 for(var mx = x0; mx >= -w; mx -= axes.scalex){
  ctx.moveTo(mx,y0+4); ctx.lineTo(mx,y0-4);  // X axis
  for(var nx = mx; nx >= mx - axes.scalex; nx -= axes.scalem){
   ctx.moveTo(nx,y0-2); ctx.lineTo(nx,y0+2);  // X axis
  };
  ctx.fillStyle = "rgb(100,200,200)";
  ctx.font = "9px Arial";
  ctx.textAlign = "center";
  ctx.fillText(Math.round(((((mx)/axes.scalex)-(1/(2*axes.scalex)+1))),32)+1, x0+mx, y0-8);
 };
 for(var my = y0; my <= h; my += axes.scaley){ 
  ctx.moveTo(x0-4,my);    ctx.lineTo(x0+4,my);  // Y axis
  for(var ny = my; ny <= my + axes.scaley; ny += axes.scalem){
   ctx.moveTo(x0-2,ny);    ctx.lineTo(x0-2,ny);  // Y axis
  };
 };
 ctx.strokeStyle = "rgb(128,128,128)"; 
 ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
 ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
 ctx.stroke();
 roundedRect(ctx, 0, 0, w, h, 9);
 roundedRect(ctx, .5, .5, w-1, h-1, 9);
 roundedRect(ctx, 1, 1, w-2, h-2, 9);
}

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