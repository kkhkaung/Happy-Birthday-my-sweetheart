function goTo(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function reveal(button){
  document.querySelectorAll(".love-list button").forEach(b=>b.style.transform="");
  button.style.transform="scale(1.02)";
  document.getElementById("love-note").classList.add("show");
}

const petals = document.querySelector(".petals");
for(let i=0;i<18;i++){
  const p=document.createElement("span");
  p.textContent = Math.random()>.35 ? "♡" : "✦";
  p.style.position="absolute";
  p.style.left=(Math.random()*100)+"%";
  p.style.top=(Math.random()*100)+"%";
  p.style.color="rgba(255,205,228,"+(0.25+Math.random()*.55)+")";
  p.style.fontSize=(7+Math.random()*13)+"px";
  p.style.animation=`drift ${7+Math.random()*8}s ease-in-out ${Math.random()*5}s infinite`;
  petals.appendChild(p);
}
const style=document.createElement("style");
style.textContent=`@keyframes drift{0%,100%{transform:translate3d(0,0,0) rotate(0deg)}50%{transform:translate3d(${Math.random()*35-17}px,${Math.random()*35-17}px,0) rotate(120deg)}}`;
document.head.appendChild(style);
