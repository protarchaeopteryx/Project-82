canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var line_width = 5;
var radis = 5;
mouse_event = "null";
canvas.addEventListener("mousemove" , mouse_move);
canvas.addEventListener("mousedown" , mouse_down);
function colr() {
    color = document.getElementById("color").value;
}
function line_Width() {
    line_width = document.getElementById("width").value;
}
function radi() {
    radis = document.getElementById("radi").value;
}
function mouse_down(e) {
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseleave" , mouse_leave);
function mouse_leave(e) {
    mouse_event = "mouseleave";
}
canvas.addEventListener("mouseup" , mouse_up);
function mouse_up(e) {
    mouse_event = "mouseup";
}
function mouse_move(e) {
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        console.log(line_width);
     ctx.arc(current_mouse_x,current_mouse_y,radis,0,360);
        ctx.stroke();
    }
}