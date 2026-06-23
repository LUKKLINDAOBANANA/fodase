let startDate = new Date("2026-05-16");

function updateCounter(){
let now = new Date();
let diff = now - startDate;
let days = Math.floor(diff / (1000*60*60*24));

document.getElementById("counter").innerHTML =
"💜 Juntos há " + days + " dias 💜";
}
setInterval(updateCounter,1000);
updateCounter();

/* carta */
function openLetter(){
document.getElementById("letter").style.display="block";

setTimeout(()=>{
document.getElementById("afterLetter").style.display="block";
},5000);
}

/* frases finais */
let phrases = [
"Eu amo seus olhos 💜",
"Eu amo seu sorriso 🖤",
"Eu amo seu jeito ✨",
"Eu amo quando você fala comigo 🎀",
"Eu amo cada detalhe seu 🦇",
"Você é a melhor parte dos meus dias ❤️"
];

function startLove(){
document.getElementById("letter").style.display="none";
document.getElementById("afterLetter").style.display="none";

let box = document.getElementById("lovePage");
box.style.display="block";

let i = 0;

function show(){
if(i < phrases.length){
box.innerHTML = phrases[i];
i++;
setTimeout(show,2000);
}
}

show();
}

/* morcegos */
function spawnBat(){
let el = document.createElement("div");
el.className="bat";
el.innerHTML="🦇";
el.style.left=Math.random()*window.innerWidth+"px";
el.style.top=Math.random()*window.innerHeight+"px";
document.body.appendChild(el);

setTimeout(()=>el.remove(),6000);
}

setInterval(spawnBat,2000);
