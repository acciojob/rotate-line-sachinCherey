//your JS code here. If required.
let a=document.getElementById("line");
let rotation=0;

function rotate(){
rotation +=1;

line.style.transform=`rotate(${rotation}deg)`;

requestAnimationFrame(rotate);
}

rotate();