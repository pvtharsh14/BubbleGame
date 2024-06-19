var timer=60; 
var score=0;
var n=0;
  function increaseScore() {
    score+=10;
    document.querySelector("#scor").textContent=score;
  }
function makeBubble(){
    var count="";
for(var i=1;i<165;i++){

    var r=Math.floor(Math.random()*10);
    count+=`<div class="bubble">${r}
    </div>`
}
document.querySelector("#pbtm").innerHTML=count; 
}
 
function runTimer(){
 var timerin=setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timervalue").textContent=timer; }
    else{
        clearInterval(timerin);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over </h1> `

    }
},1000);
}
function newhit(){
    n=Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent=n;
}

document.querySelector("#pbtm").addEventListener("click",  function(details){
   var clickednum=Number(details.target.textContent);
   if(clickednum===n){
    increaseScore();
    makeBubble();
    newhit();

   }
    
});
runTimer();
makeBubble();
newhit();