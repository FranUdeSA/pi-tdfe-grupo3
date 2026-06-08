let formulario = document.querySelector(".formularioRegistroLogin");
let usuario = document.querySelector("#correoElectronico");
let contraseña = document.querySelector("#password");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = usuario.value;
    let password = contraseña.value;
    if (email === "" || !email.includes("@") || !email.includes(".") || email.length < 10) {
        alert("Por favor, ingresa un correo electrónico válido.");
    } else if (password === "" || password.length < 8) {
        alert("Por favor, ingresa una contraseña de al menos 8 caracteres.");
    }
    else {
        window.location.href = "./index.html";
    }
});