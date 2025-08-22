const digitalTime = document.getElementById('digital');

setInterval(()=>{
    const date = new Date();
digitalTime.innerHTML=date.toLocaleTimeString();
},1000)