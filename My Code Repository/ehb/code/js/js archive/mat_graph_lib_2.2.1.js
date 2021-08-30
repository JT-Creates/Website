var draw = {
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
  ctx.fillStyle = "white";
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
  ctx.font = "12pt Arial";
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
  funGraph(ctx,axes,function(x){return math.sin(x);},"rgb(11,153,11)","f(x) = sin(x)", 15,true, this.g_resx); 
  funGraph(ctx,axes,function(x){return (x/3);},"rgb(66,44,255)","f(x) = x/3", 30,true, this.g_resx);
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
   funGraph(ctx,axes,function(x){return eval(item_1[i].value);}, item_0[i].value, fn + i +" = "+ item_1[i].value, i*15+15,item_2[i].checked, this.g_resx);
  };
 },
 resizeCanvas : function() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  c_width = document.getElementById("r_col").clientWidth;
  if(canvas.width > c_width) canvas.width = c_width + 1;
  else canvas.width = c_width - 4;
  canvas.height = document.getElementById("main_container").clientHeight - 2;
 }
}

function funGraph(ctx, axes, func, color, text_str, ytext, fn, dx) {
 var xx, yy, x0 = axes.x0, y0 = axes.y0, sx = axes.scalex, sy = axes.scaley;
 var iMax = Math.round((ctx.canvas.width-x0)/dx);
 var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
 ctx.beginPath();
 ctx.lineWidth = 1;
 ctx.strokeStyle = color;
 for (var i = iMin; i <= iMax; i += dx) {
  if (fn == true) {
   xx = dx*i;
   yy = sy*func(xx/sx);
  } else {
   yy = dx*i;
   xx = sx*func(yy/sy);
  };
  if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
  else ctx.lineTo(x0+xx,y0-yy);
 };
 ctx.stroke();
 ctx.fillStyle = "lightgray";
 ctx.fillRect(sy-6,ytext-12,text_str.length*6, 15);
 ctx.font = "12px Arial";
 ctx.textAlign = "left";
 ctx.fillStyle = color;
 ctx.fillText(text_str, sy, ytext);
}

function showAxes(ctx,axes) {
 var sx = axes.scalex, sy = axes.scaley, sm = axes.scalem, x0=axes.x0, w=ctx.canvas.width, y0=axes.y0, h=ctx.canvas.height;
 var xmin = axes.doNegativeX ? 0 : x0;
 var cscalev = (y0 + x0)/sm;
 ctx.beginPath();
 ctx.strokeStyle = "gray";
 ctx.fillStyle = "rgb(100,200,200)";
 ctx.font = "9pt Arial";
// X axis
 ctx.textAlign = "center";
 for(var mx = x0; mx <= w; mx += sx){
  ctx.moveTo(mx,y0+4);
  ctx.lineTo(mx,y0-4);
  for(var nx = mx; nx <= mx + sx; nx += sm){
   ctx.moveTo(nx,y0-2);
   ctx.lineTo(nx,y0+2);
  };
  ctx.fillText(Math.round(((((mx)/sx)-(1/(2*sx)+1))),32)+1, x0+mx, y0-8);
 };
 for(var mx = x0; mx >= -w; mx -= sx){
  ctx.moveTo(mx,y0+4);
  ctx.lineTo(mx,y0-4);
  for(var nx = mx; nx >= mx - sx; nx -= sm){
   ctx.moveTo(nx,y0-2);
   ctx.lineTo(nx,y0+2);
  };
  ctx.fillText(Math.round(((((mx)/sx)-(1/(2*sx)+1))),32)+1, x0+mx, y0-8);
 };
// Y axis
 ctx.textAlign = "left";
 for(var my = y0; my >= -h; my -= sy){ 
  ctx.moveTo(x0-4,my); ctx.lineTo(x0+4,my);
  for(var ny = my; ny >= my - sy; ny -= sm){
   ctx.moveTo(x0-2,ny);
   ctx.lineTo(x0-2,ny);
  };
  ctx.fillText(Math.round(-((((my)/sy)-(1/(2*sy)))),32), x0+8, y0+my);
 };
 for(var my = y0; my <= h; my += sy){ 
  ctx.moveTo(x0-4,my);
  ctx.lineTo(x0+4,my);
  for(var ny = my; ny <= my + sy; ny += sm){
   ctx.moveTo(x0-2,ny);
   ctx.lineTo(x0-2,ny);
  };
  ctx.fillText(Math.round(-((((my)/sy)-(1/(2*sy)))),32), x0+8, y0+my);
 };
 ctx.moveTo(xmin,y0);
 ctx.lineTo(w,y0); // X axis
 ctx.moveTo(x0,0);
 ctx.lineTo(x0,h); // Y axis
 ctx.stroke();
 roundedRect(ctx, 0, 0, w, h, 9, 2);
}

function roundedRect(ctx, x, y, width, height, radius, w) {
 ctx.lineWidth = w;
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