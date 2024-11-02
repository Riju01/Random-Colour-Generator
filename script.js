let button=document.querySelector("button");
button.addEventListener("click",function(){
   let h3=document.querySelector("h3");
   h3.innerText=getRandomColor();
   let div=document.getElementById("genDiv");
   div.style.backgroundColor=getRandomColor();
})

function getRandomColor(){
   let red=Math.floor(Math.random()*255);
   let green=Math.floor(Math.random()*255);
   let blue=Math.floor(Math.random()*255);
   let rgb_value=`rgb(${red}, ${green}, ${blue})`;
   return rgb_value;
}

button.onclick=function(){
   button.innerText="Generate Another";
}
