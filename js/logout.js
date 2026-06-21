let bienvenidoOut = document.querySelector('.bienvenidoUsuario');
let logoutOut = document.querySelector('.logoutUsuario');

let loginNavIn = document.querySelector('.loginNav');
let registroNavIn = document.querySelector('.registroNav');

logoutOut.addEventListener('click', function(event) {
    
    event.preventDefault();

    localStorage.clear();
    
    bienvenidoOut.style.display = 'none';
    logoutOut.style.display = 'none';
    loginNavIn.style.display = 'block';
    registroNavIn.style.display = 'block';
})
