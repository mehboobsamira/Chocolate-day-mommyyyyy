// UNLOCK

function unlock(){

if(document.getElementById("pass").value==="2828"){

document.getElementById("lock").style.display="none";

document.getElementById("app").classList.remove("hidden");

document.getElementById("music").play();

}else alert("Wrong password");

}



// LOVE COUNTER

const start=new Date("2025-07-06");

document.getElementById("counter").innerText=

`Since the day we met: ${Math.floor((new Date()-start)/86400000)} days ❤️`;



// NAME TYPE

const text="Samira…";let i=0;

(function type(){

if(i<text.length){

name.innerHTML+=text[i++];

setTimeout(type,200);

}})();



// HUG + HEARTBEAT

hugBtn.onclick=()=>{

heartSound.play();

for(let i=0;i<10;i++)setTimeout(firework,i*150);

nextBtn.classList.remove("hidden");

};



// NEXT

nextBtn.onclick=()=>{

document.querySelector(".choice").classList.remove("hidden");

};



// CHOICE

function yes(){celebrate(10);showGallery()}

function always(){celebrate(20);setInterval(rain,300);showGallery()}



// CELEBRATION

function celebrate(n){

for(let i=0;i<n;i++)setTimeout(firework,i*150);

}



// GALLERY

function showGallery(){

document.querySelector(".choice").classList.add("hidden");

document.querySelector(".gallery").classList.remove("hidden");

document.querySelector(".final").classList.remove("hidden");

}



// PHOTO FLIP

const photos=document.querySelectorAll(".photo");let c=0;

document.addEventListener("click",()=>{

if(document.querySelector(".gallery").classList.contains("hidden"))return;

photos[c].classList.remove("active");

c=(c+1)%photos.length;

photos[c].classList.add("active");

});



// FIREWORK

function firework(){

const f=document.createElement("div");

f.className="firework";

f.style.left=Math.random()*100+"%";

f.style.top=Math.random()*100+"%";

document.body.appendChild(f);

setTimeout(()=>f.remove(),1200);

}



// RAIN

function rain(){

const r=document.createElement("div");

r.className="rain";

r.innerHTML=Math.random()>0.5?"🌹":"🍫";

r.style.left=Math.random()*100+"%";

r.style.animationDuration=2+Math.random()*3+"s";

document.body.appendChild(r);

setTimeout(()=>r.remove(),5000);

}
