function create(){
    var letters="0123456789ABCDEF";
    var color ="#";
    for(var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*letters.length)]
    }
    return color;
}
function ChangeColor(){
    var hexnum = create();
    document.getElementById("hex").innerHTML = hexnum;
    document.body.style.background = hexnum;
}