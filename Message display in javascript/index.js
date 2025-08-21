(function(){
    const form = document.querySelector('form');
    const message = document.querySelector('.message');
    const contents = document.querySelector('.content'); // ✅ fix

    form.addEventListener('submit', function(e){
        e.preventDefault();

        contents.textContent = `"${message.value}" this is your message`;
        message.value = "";
    });
})();
