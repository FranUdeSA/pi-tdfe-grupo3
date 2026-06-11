let sinResultados = document.querySelector(".sinResultados");
let resultados = document.querySelector(".resultados");
let tituloResultados = document.querySelector(".resultados .titulosHome");
let tituloSinResultados = document.querySelector(".sinResultados .titulosHome");
let contenedor = document.querySelector(".productosDestacados");

let parametros = new URLSearchParams(location.search);
let busqueda = parametros.get("barrabuscar");

sinResultados.style.display = "none";
resultados.style.display = "none";

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        let productos = data.products;

        if (productos.length === 0) {
            sinResultados.style.display = "block";
            resultados.style.display = "none";

            tituloSinResultados.innerText = `Resultado de busqueda: Sin resultado.`;
        } else {
            sinResultados.style.display = "none";
            resultados.style.display = "block";

            tituloResultados.innerText = `Resultados de busqueda: ${busqueda}`;

            for (let i = 0; i < productos.length; i++) {
                contenedor.innerHTML += `
                    <article>
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p>${productos[i].description}</p>
                        <h4>$${productos[i].price}</h4>

                        <span class="verDetalle">
                            <a href="./product.html?id=${productos[i].id}">
                                Ver detalle
                            </a>
                        </span>
                    </article>
                `;
            }
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });