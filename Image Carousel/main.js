var prev = document.getElementById("previous");
var next = document.getElementById("next");

var arr = ["//picsum.photos/300/200?2","//picsum.photos/300/200?3","//picsum.photos/300/200?4","//picsum.photos/300/200?5","//picsum.photos/300/200?6","//picsum.photos/300/200?7","//picsum.photos/300/200?8","//picsum.photos/300/200?9"];

var i =0;

next.addEventListener('click',function(){
    i++;
    if(i>arr.length-1){
        i=0;

    }
    document.getElementById("img1").src=arr[i];
    

});
prev.addEventListener('click',function(){
    i--;
    if(i<0){
        i=arr.length-1
    }
    document.getElementById("img1").src=arr[i];

});