let url1 = 'https://dummyjson.com/products?limit=10';
let url2 = 'https://dummyjson.com/products?limit=10&skip=10';

let contenedorDestacados = document.querySelector('.productosDestacados');
let contenedorAleatorios = document.querySelector('.productosAleatorios');

function modificacionHTML(url,contenedor) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            const productos = data.products;

            for (let i = 0; i < productos.length; i++) {
                const producto = productos[i];
                contenedor.innerHTML += 
                       ` 
                            <article>
                                    <img src="${producto.thumbnail}" alt="">
                                    <h3>${producto.title}</h3>
                                    <p>${producto.description}</p>
                                    <h4>${producto.price}</h4>                                            
                                    <span class="verDetalle"> <a href="./product.html?id=${producto.id}">Ver detalle</a> </span> 
                            </article>
                        `
            }
        })
        .catch(function (error) {
            console.log('El error es: ' + error);
        })
}

modificacionHTML(url1 , contenedorDestacados);
modificacionHTML(url2 , contenedorAleatorios);