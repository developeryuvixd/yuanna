const enterBtn =
document.getElementById("enterBtn");

const startScreen =
document.getElementById("startScreen");

const mainScreen =
document.getElementById("mainScreen");

const music =
document.getElementById("music");

const story =
document.getElementById("story");

const paragraph =
"By the time you are reading this, I want to say that somewhere in the endless multiverse, another version of us is already together. Maybe he is sitting beside you while you read these words. Maybe he gets to hear your voice without waiting, see your smile whenever he wants, and spend every ordinary day with you. If there are countless universes beyond this one, then I hope that in at least one of them, we found each other, stayed together, and never had to say goodbye.";

enterBtn.addEventListener("click",()=>{

startScreen.style.opacity="0";

setTimeout(()=>{

startScreen.style.display="none";

mainScreen.style.display="block";

music.volume=0.5;

music.play();

typeWriter();

createPetals();

},800);

});

function typeWriter(){

let i=0;

function type(){

if(i<paragraph.length){

story.innerHTML += paragraph.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}

function createPetals(){

setInterval(()=>{

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.style.top =
Math.random()*150 + "px";

petal.style.right =
Math.random()*250 + "px";

petal.style.width =
(10 + Math.random()*12) + "px";

petal.style.height =
petal.style.width;

petal.style.animationDuration =
(8 + Math.random()*6) + "s";

document.getElementById("petals")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},15000);

},300);

}