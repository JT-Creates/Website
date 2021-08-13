
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
  document.getElementById("scalex").value = this.ctx_ws;
  document.getElementById("scaley").value = this.ctx_hs;
  document.getElementById("shiftx").value = this.x_shift;
  document.getElementById("shifty").value = this.y_shift;
 },
 clear : function(){
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
 },
 refresh_ctx : function(){
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  axes.x0 = .5 + this.x_shift*canvas.width;  // x0 pixels from left to x=0
  axes.y0 = .5 + this.y_shift*canvas.height; // y0 pixels from top to y=0
  axes.scalex = this.ctx_ws;             // 40 pixels from x=0 to x=1
  axes.scaley = this.ctx_hs;             // 40 pixels from x=0 to x=1
  axes.scalem = (canvas.width*canvas.height)/(this.ctx_ws*this.ctx_hs);
  axes.doNegativeX = this.N_mode;
  showAxes(ctx,axes);
  ctx.fillStyle = "gray";
 ctx.font = "12px Arial";
 ctx.textAlign = "left";
 ctx.fillText("Programed by: JT", canvas.width - 128, canvas.height - 16);
  ctx.
  return;
 },
 initialize : function() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  axes.x0 = .5 + this.x_shift*canvas.width;  // x0 pixels from left to x=0
  axes.y0 = .5 + this.y_shift*canvas.height; // y0 pixels from top to y=0
  axes.scalex = this.ctx_ws;             // 40 pixels from x=0 to x=1
  axes.scaley = this.ctx_hs;             // 40 pixels from x=0 to x=1
  axes.scalem = axes.scalex / 3;
  axes.doNegativeX = this.N_mode;
  funGraph(ctx,axes,fun1,"rgb(11,153,11)",1,"f(x) = 6*sin(x)", axes.scaley, 15,true); 
  funGraph(ctx,axes,fun2,"rgb(66,44,255)",1,"f(x) = 6*cos(2x)", axes.scaley, 30,true);
 },
 plot_me : function() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;
  var axes={}, ctx = canvas.getContext("2d");
  axes.x0 = .5 + this.x_shift*canvas.width;  // x0 pixels from left to x=0
  axes.y0 = .5 + this.y_shift*canvas.height; // y0 pixels from top to y=0
  axes.scalex = this.ctx_ws;             // 40 pixels from x=0 to x=1
  axes.scaley = this.ctx_hs;             // 40 pixels from x=0 to x=1
  axes.doNegativeX = this.N_mode;
  var elol = document.getElementById("els");
  var item_0 = document.querySelectorAll(".val_0");
  var item_1 = document.querySelectorAll(".val_1");
  var item_2 = document.querySelectorAll(".val_2");
  for(var i = 0; i < elol.children.length; i++){
   var fn = "y";
   if(item_2[i].checked == false) {
   fn = "x";
   };
   funGraph(ctx,axes,function(x){return eval(item_1[i].value);}, item_0[i].value,1, fn + i +" = "+ item_1[i].value, axes.scaley, i*15+15,item_2[i].checked);
  };
 }
}
