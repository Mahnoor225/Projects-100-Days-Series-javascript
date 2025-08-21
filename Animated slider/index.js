const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removingActingClass();
        panel.classList.add('active')
    })
})

function removingActingClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}