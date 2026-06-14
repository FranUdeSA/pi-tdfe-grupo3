/*--API--*/
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idCategoria = queryStringObj.get('id');
let url = `https://dummyjson.com/products/category/${idCategoria}`;

/*--Api para el Aside--*/
let urlCat = 'https://dummyjson.com/products/category-list';
let categorias = document.querySelector('.categorias');

let titulo = document.querySelector(".titulosHome")
let contenedorProductos = document.querySelector(".productosDestacados")
fetch(url)
    .then(function (response) {
       return response.json();
    })
    .then(function (data) {
        titulo.innerText = idCategoria;

        let productos = data.products;
        let productosDeCategoria = "";
        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];
            productosDeCategoria += `<article>
            <img src="${element.thumbnail}" alt="${element.title}">
            <h3>${element.title}</h3>
            <h3>$${element.price}</h3>
            <p>${element.description}</p>
            <a href="./product.html?id=${element.id}"class=verDetalle >VER DETALLE</a>
            </article>`
    }
    contenedorProductos.innerHTML = productosDeCategoria;

})
.catch(function (error) {
    console.log("Error:" + error )
})

/*--Aside--*/
fetch(urlCat) 
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        
        for (let i = 0; i < data.length; i++) {
            const categoria = data[i];
            categorias.innerHTML += `<li><a href="./category.html?id=${categoria}">${categoria}</a></li>`
        }
    }) 
    .catch(function (error) {
        console.log('El error es: ' + error);
    })
