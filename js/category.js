// capturar los elementos como titulo y productos
let linksCategorias = document.querySelectorAll(".categorias a");

let titulo = document.querySelector(".titulosHome");
let contenedor = document.querySelector(".productosDestacados");
let categoria = localStorage.getItem("categoria");
let urlCat = "https://dummyjson.com/products/category";

titulo.innerText = "categoria " + categoria;
contenedor.innerHTML = "";

for (let i = 0; i < linksCategorias.length; i++) {
    linksCategorias[i].addEventListener("click", function(evento) {
        evento.preventDefault();

        let categoriaElegida = this.innerText;
        localStorage.setItem("categoria", categoriaElegida);

        location.href = "./category.html";
    });
}

fetch(`${urlCat}/${categoria}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            contenedor.innerHTML += `
                <article>
                    <img src="${productos[i].thumbnail}" alt="">
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <h4>${productos[i].price}</h4>
                    <span class="verDetalle">
                        <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </span>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });