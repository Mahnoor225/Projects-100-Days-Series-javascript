const words = ['seat','sale','eyes','hello','mahnoor','good','morning'];

function get(){
    const char = '0123456789@#$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const maxLength = 20; 
    let password = '';

    // random words se ek part add kar dete hain
    password += words[Math.floor(Math.random() * words.length)];

    // random characters add karte hain until length = 20
    while(password.length < maxLength){
        const randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];
    }

    // password ko input field me show karo
    document.getElementById("password").value = password;
    
}
