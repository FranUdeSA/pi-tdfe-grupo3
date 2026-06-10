let formulario = document.querySelector('.formularioRegistroLogin');

let email = document.querySelector('#email');
let password = document.querySelector('#password');
let rePassword = document.querySelector('#rePassword');

let errorMail = document.querySelector('.error-feedback-mail');
let errorPassword = document.querySelector('.error-feedback-password');
let errorRePassword = document.querySelector('.error-feedback-rePassword');

formulario.addEventListener('submit', function (event) {
    
    event.preventDefault();

    let error = false /* Variable para saber si hubo fallas*/
    
    if (email.value == "") {
        errorMail.style.display = 'block';
        errorMail.innerText = 'El campo no puede quedar vacío';
        error = true;
    }
    if (password.value == "") {
        errorPassword.style.display = 'block';
        errorPassword.innerText = 'El campo no puede quedar vacío';
        error = true;
    } else if (password.value.length < 6) {
        errorPassword.style.display = 'block';
        errorPassword.innerText = 'La contraseña debe tener al menos 6 caracteres';
        error = true;
    }
    if (rePassword.value == "") {
        errorRePassword.style.display = 'block';
        errorRePassword.innerText = 'El campo no puede quedar vacío';
        error = true; 
    } else if (rePassword.value !== password.value) {
        errorRePassword.style.display = 'block';
        errorRePassword.innerText = 'Las contraseñas no coinciden';
        error = true;
    }

    if (error == false) {
        formulario.submit();
    }
})