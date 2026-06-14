/*--API--*/
let queryString = window.location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://dummyjson.com/products/${id}`;

/*--Api para el Aside--*/
let urlCat = 'https://dummyjson.com/products/category-list';
let categorias = document.querySelector('.categorias');

/* -------------------------Imagen------------------------------------- */
let imagenProducto = document.querySelector(".imagenP")

/* -------------------------Producto-------------------------------------- */
let nombreProducto = document.querySelector(".h2Product")
let  marcaProducto = document.querySelector(".p-product")
let descripcionProducto = document.querySelector(".descripcionP")
let precioProducto = document.querySelector(".precioP")
let categoriaProducto = document.querySelector(".categoriaP")
let stockProducto = document.querySelector(".stockP")
let tagsProducto = document.querySelector(".tags")
let reviewProducto = document.querySelector(".review")

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
    categoriaProducto.href = `./category.html?id=${producto.categoria}`
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

