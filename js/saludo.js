let bienvenido = document.querySelector('.bienvenidoUsuario');
let logout = document.querySelector('.logoutUsuario');

let loginNav = document.querySelector('.loginNav');
let registroNav = document.querySelector('.registroNav');

let usuario = localStorage.getItem('usuario');

//Cuando el Login es exitoso.

if (usuario != null) {
    bienvenido.innerText += usuario;
    bienvenido.style.display = 'block';
    loginNav.style.display = 'none';
    registroNav.style.display = 'none';
    logout.style.display = 'block';
}
