// capturar los elementos como titulo y productos

let titulo = document.querySelector(".titulosHome");
let contenedor = document.querySelector(".productosDestacados");
let categorias = document.querySelector(".categorias");
let categoria = localStorage.getItem("categoria");  
let linksCategorias = document.querySelectorAll(".categorias li");

let urlCategorias = "https://dummyjson.com/products/category-list";
let urlCategory = "https://dummyjson.com/products/category";

titulo.innerHTML = "<h2>Categorías</h2>"; 
contenedor.innerHTML = "";

/*--Aside--*/
fetch(urlCategorias)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // creacion <li> categorias
        for (let i = 0; i < data.length; i++) {
            const cat = data[i];
            categorias.innerHTML += `<li><a href="./category.html">${cat}</a></li>`;
        }
        // agregación de listeners
        let linksCategorias = document.querySelectorAll(".categorias li");
        for (let i = 0; i < linksCategorias.length; i++) {
            linksCategorias[i].addEventListener("click", function(evento) {
                evento.preventDefault();
                let categoriaElegida = this.innerText;
                localStorage.setItem("categoria", categoriaElegida);
                location.href = "./category.html";
            });
        }
    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });

// carga categoría seleccionada 
fetch(`${urlCategory}/${categoria}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        titulo.innerHTML = `<h2>${categoria}</h2>`;

        if (data.products.length === 0) {
        contenedor.innerHTML = `<p>No hay productos disponibles en esta categoría.</p>`;  
            return;
        }
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