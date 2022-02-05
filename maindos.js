/*var mouseEvent ="empty";*/
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

color = "black";
width_of_line = 1;

if(width<992){
    document.getElementById("mycanvas").width = new_width;
    document.getElementById("mycanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

/*canvas.addEventListener("mousedown",my_mousedown);*/
canvas.addEventListener("touchstart",my_touchstart);

/*function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widht_of_line").value;

    mouseEvent = "mouseDown";
}*/

function my_touchstart(e){
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

/*canvas.addEventListener("mousemove",my_mousemove);*/
canvas.addEventListener("touchmove",my_touchmove);

/*function my_mousemove(e){
   current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
   current_position_of_mouse_y = e.clientY - canvas.offsetTop;

   if(mouseEvent == "mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width_of_line;

       console.log("Ultima posicion de las coordenadas x e y = ");
       console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);
       ctx.moveTo(last_position_of_x, last_position_of_y);

       console.log("posicion de las coordenadas x e y = ");
       console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);
       ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
   }
   last_position_of_x = current_position_of_mouse_x;
   last_position_of_y = current_position_of_mouse_y;
}*/
function my_touchmove(e){
    console.log("my_touchmove");
    current_position_of_touch_x = e.clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.clientY - canvas.offsetTop;

        ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width_of_line;

       console.log("Ultima posicion de las coordenadas x e y = ");
       console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);
       ctx.moveTo(last_position_of_x, last_position_of_y);

       console.log("posicion de las coordenadas x e y = ");
       console.log("x = "+ last_position_of_x + "y = "+ last_position_of_y);
       ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

}

/*canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}*/
/*
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}*/

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}