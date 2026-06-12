let formulario = document.querySelector(".formularioRegistroLogin");
let usuario = document.querySelector("#correoElectronico");
let contraseña = document.querySelector("#password");
let errorUsuario =document.querySelector(".errorLogin_usuario")
let errorContrasena=document.querySelector(".errorLogin_contrasena")
let error = false
let errorGeneral = document.querySelector(".errorGeneral")

formulario.addEventListener("submit", function(event) {
    error = false

    event.preventDefault(); 
    if (usuario.value == "") {
        errorUsuario.style.display = 'block';
        errorUsuario.innerText = 'El campo no puede quedar vacío';
        error = true;
    }
    if (usuario.value.length < 10) {
        errorUsuario.style.display = 'block';
        errorUsuario.innerText = 'El campo debe tener mas de 10 caracteres';
        error = true;
    }
    if (contraseña.value == "") {
        errorContrasena.style.display = 'block';
        errorContrasena.innerText = 'El campo no puede quedar vacío';
        error = true;
    } else if (contraseña.value.length < 8) {
        errorContrasena.style.display = 'block';
        errorContrasena.innerText = 'La contraseña debe tener al menos 8 caracteres';
        error = true;
    }z
    if (error == false) {
        let usuarioGuardado = localStorage.getItem("usuario")
        let passwordGuardado = localStorage.getItem("password")
        if (usuario.value === usuarioGuardado && contraseña.value === passwordGuardado) {
            formulario.submit();    
        }else{
        errorGeneral.style.display='block'
        errorGeneral.innerText = "El usuario o la contraseña son invalidos."
        error = true
        }        
    }
});
