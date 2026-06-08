function cargar() {
        let producto = localStorage.getItem("producto")
        let productojson = JSON.parse(producto)
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${productojson.nombre}</h2>
                        <img src="${productojson.imagen}" alt="" id="" width="200">
                        <p id="detalle">${productojson.descripcion}</p>
                        <h3 id="precio">$ ${productojson.precio}</h3>
                        <p id="stock">${productojson.stock}</p>
                         <button onclick="sumarproducto()">+</button>
                <p id="cantidad">0</p>
                <button onclick="restarproducto()">-</button>
                <button onclick="cargarcarrito()">Carrito</button>
          `              
        document.getElementById("boxproductos").appendChild(parrafo)
    
}
cargar()
function sumarproducto() {
    let cantidad = document.getElementById("cantidad").innerText
    cantidad = parseInt(cantidad) + 1
    document.getElementById("cantidad").innerText = cantidad
}
function restarproducto() {
    let cantidad = document.getElementById("cantidad").innerText
    cantidad = parseInt(cantidad) - 1
    document.getElementById("cantidad").innerText = cantidad
}
function cargarcarrito() {
    let cantidad = document.getElementById("cantidad").innerText
    localStorage.setItem("cantidad", cantidad)
    }
    