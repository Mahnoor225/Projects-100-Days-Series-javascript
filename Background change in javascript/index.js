const butto = document.querySelector("button");

const body = document.querySelector('body');

const color = ['blue','green','yellow',"pink","black","gray"];
body.style.backgroundColor='red';

const change = ()=>{
    const colos = parseInt(Math.random() * color.length);
    body.style.backgroundColor=color[colos];
}

butto.addEventListener('click',change)