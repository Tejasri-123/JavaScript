const count=0;
var data=0;
document.getElementById("counting").innerText=data;
function increase(){
    data++;
    document.getElementById("counting").innerText=data;
}
function decrease(){
    data--;
    document.getElementById("counting").innerText=data;
}
function reset(){
    data=0;
    document.getElementById("counting").innerText=count;

}