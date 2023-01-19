let colors = ["red","green","blue","yellow","grey","orange"]
//By using Eventlistener
/*let bg = document.getElementById('button');

bg.addEventListener('click',function(){
   let randomColor = colors[Math.floor(Math.random()*colors.length)]
   
   document.body.style.background = randomColor;
    
})*/
//By using Function
function ChangeColor(){
   let randomColor=colors[Math.floor(Math.random()*colors.length)]
   document.body.style.background = randomColor;

}
