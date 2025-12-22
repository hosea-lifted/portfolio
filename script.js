// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// MUSIC
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
let playing=false;
musicBtn.onclick=()=>{ playing?music.pause():music.play(); playing=!playing; musicBtn.textContent=playing?"🔇 Music":"🔊 Music"; };

// MODAL
const modal=document.getElementById("modal");
[...document.querySelectorAll("#openSupport, #supportProfile, #supportBox")].forEach(b=>b.onclick=()=>modal.style.display="flex");
document.querySelector(".close").onclick=()=>modal.style.display="none";
window.onclick=e=>{ if(e.target===modal) modal.style.display="none"; };

// COPY ACCOUNT
document.getElementById("copy").onclick=()=>{ navigator.clipboard.writeText("7041893761"); alert("Account number copied ✅"); };

// SNOW
const canvas=document.getElementById("snow"), ctx=canvas.getContext("2d");
function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
resize(); window.addEventListener("resize", resize);
const flakes=Array.from({length:200},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*3+1,d:Math.random()+0.5}));
setInterval(()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,0.9)";
  ctx.beginPath();
  flakes.forEach(f=>{
    ctx.moveTo(f.x,f.y);
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    f.y+=f.d;
    if(f.y>canvas.height){ f.y=0; f.x=Math.random()*canvas.width; }
  });
  ctx.fill();
},25);

// SEND LOVE
document.getElementById("loveBox").onclick = () => createHearts(15);
function createHearts(count = 1){
    for(let i=0;i<count;i++){
        const heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random()*window.innerWidth + "px";
        heart.style.top = Math.random()*window.innerHeight + "px";
        heart.style.fontSize = `${Math.random()*20 + 15}px`;
        heart.style.opacity = 0.8;
        heart.style.zIndex = 9999;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000 + Math.random()*1000);
    }
}

// SHARE PAGE
document.getElementById("shareBox").onclick = () => {
    if(navigator.share){
        navigator.share({
            title: "Merry Christmas 🎄",
            text: "Check out this festive page by Hosea Lifted!",
            url: location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(location.href);
        alert("Link copied! Share it with your friends 🎄");
    }
};

// FUN ACTIVITY (Confetti + Snowballs)
document.getElementById("funBox").onclick = () => {
    createConfetti(25);
    createSnowballs(10);
};

function createConfetti(count = 10){
    for(let i=0;i<count;i++){
        const c = document.createElement("div");
        c.innerText = "🎉";
        c.style.position = "fixed";
        c.style.left = Math.random()*window.innerWidth + "px";
        c.style.top = Math.random()*window.innerHeight + "px";
        c.style.fontSize = `${Math.random()*25 + 20}px`;
        c.style.zIndex = 9999;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2000 + Math.random()*1500);
    }
}

function createSnowballs(count = 5){
    for(let i=0;i<count;i++){
        const s = document.createElement("div");
        s.innerText = "❄️";
        s.style.position = "fixed";
        s.style.left = Math.random()*window.innerWidth + "px";
        s.style.top = Math.random()*window.innerHeight + "px";
        s.style.fontSize = `${Math.random()*30 + 20}px`;
        s.style.zIndex = 9999;
        document.body.appendChild(s);

        // Animate falling
        let topPos = parseInt(s.style.top);
        const fall = setInterval(()=>{
            topPos += 5;
            s.style.top = topPos + "px";
            if(topPos > window.innerHeight){
                clearInterval(fall);
                s.remove();
            }
        }, 25);
    }
}
