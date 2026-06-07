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

const producto = {
 imagen: './img/foto-producto.jpg',
 nombre: 'Le Male Elixir',
 marca: 'Jean Paul Gaultier',
 descripcion: 'Bomba ambarada de vainilla, miel y tabaco que proyecta una masculinidad opulenta, cálida y sumamente adictiva. Rendimiento "beast mode" con más de 12 horas en piel, ideal para destacar en climas fríos y eventos nocturnos.',
 precio: '$290.000',
 categoria: 'Hombre',
 stock: '5 unidades',
 tags: ['Beauty','Furniture','Fragances'],
 opiniones: [
    {
        user: 'Juan Pérez',
        texto: 'Excelente perfume, muy agradable.',
        Fecha: '2026-10-01',
        Rating: '⭐⭐⭐⭐⭐'
    },
    
    {
        user: 'María García',
        texto: 'Me encanta este perfume, huele maravilloso.',
        Fecha: '2026-10-02',
        Rating: '⭐⭐⭐⭐'
    },
    {
        user: 'Carlos Rodríguez',
        texto:'No me gustó mucho, esperaba algo diferente.',
        Fecha: '2026-10-03',
        Rating: '⭐⭐'
    }
 ]
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
for (let i = 0; i < producto.opiniones.length; i++) {
    reviewProducto.innerHTML += `<section>
        <p>${producto.opiniones[i].user}</p>
        <p>${producto.opiniones[i].texto}</p>
        <p>${producto.opiniones[i].Fecha}</p>
        <p>${producto.opiniones[i].Rating}</p>
    </section>`
}

/* -------------------------Review-------------------------------------- */
