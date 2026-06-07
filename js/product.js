/*--API--*/
let url = "https://dummyjson.com/products/10"

/* -------------------------Imagen------------------------------------- */
let imagenProducto = document.querySelector("#imagenProducto")

/* -------------------------Producto-------------------------------------- */
let nombreProducto = document.querySelector("#nombreProducto")
let  marcaProducto = document.querySelector("#marcaProducto")
let descripcionProducto = document.querySelector("#descripcionProducto")
let precioProducto = document.querySelector("#precioProducto")
let categoriaProducto = document.querySelector("#categoriaProducto")
let stockProducto = document.querySelector("#stockProducto")
let tagsProducto = document.querySelector("#tagsProducto")
let reviewProducto = document.querySelector("#reviewProducto")

fetch(url) 
.then(function (response) {
    return response.json();
})
.then(function (data) {
    const producto = {
        imagen: data.thumbnail,
        nombre: data.title,
        marca: data.brand,
        descripcion: data.description,
        precio:data.price,
        categoria:data.category,
        stock: data.stock,
        tags: data.tags,
        reviews:data.reviews,

    }
    imagenProducto.src = producto.imagen
    nombreProducto.innerText = producto.nombre
    marcaProducto.innerText = producto.marca
    descripcionProducto.innerText = producto.descripcion
    precioProducto.innerText = producto.precio
    categoriaProducto.innerText = producto.categoria
    stockProducto.innerText = producto.stock
    tagsProducto.innerHTML = ""
    for (let i = 0; i < producto.tags.length; i++) {
        tagsProducto.innerHTML += `<li>${producto.tags[i]}</li>`
    }
    reviewProducto.innerHTML = ""
    for (let i = 0; i < producto.reviews.length; i++) {
        reviewProducto.innerHTML += `<section>
        <p>${producto.reviews[i].reviewerName}</p>
        <p>${producto.reviews[i].comment}</p>
        <p>${producto.reviews[i].date}</p>
        <p>${producto.reviews[i].rating}</p>
    </section>`
    }
})
.catch(function (error) {
    console.log(error);
})