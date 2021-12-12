//EJEMPLO JEST
/*
function Suma(a,b) {
    return a + b;
}
module.exports = Suma;
*/

class Producto {
    constructor(nombre,marca,codigo,descripcion,categoria,precio,stock){
        this.nombre = nombre;
        this.marca = marca;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }  
    getPrecio() {
        return this.precio 
    }

    getCategoria(){
        return this.categoria;
    }

}

class Carrito {
    constructor(){
        this.detalle = {
            precioTotal: "",
            iva: "" 
        };
        this.total = undefined;
        this.productos = [];
    }
    get getDetalle(){
        return this.detalle;
    }
    set setDetalle(d){
        this.detalle = d;
    }
    get getTotal(){
        return this.total;
    }
    set setTotal(t){
        this.total = t;
    }
    get getPuductos(){
        return this.productos;
    }
    agregarProducto(producto){
        this.productos.push(producto);
        this.detalle.precioTotal = this.detalle.precioTotal + producto.precio;
        this.detalle.iva = "21";
    } 
    
}

class Categoria {
    constructor(nombreCategoria){
        this.nombreCategoria=nombreCategoria;
        this.productos = [];
    }

    get getNombreCategoria(){
       return this.nombreCategoria;
    }

    set setNombreCategoria(nombreCategoria){
        this.nombreCategoria= nombreCategoria;
    }

    asociarProducto(producto){
       this.productos.push(producto);
    }

}

class Envio {
    constructor(provincia, localidad, codPostal, precioEnvio){
        this.provincia = provincia;
        this.localidad = localidad;
        this.codPostal = codPostal;
        this.precioEnvio = precioEnvio;
    }

    getPrecioEnvio(){
        return this.precioEnvio;
    }
}

//Prueba 1 Augusto
const producto1 = new Producto("Cubo rubik","Moyu","abc123","Cubo rubik 3x3x3","Entretenimiento",1360);
const precio = producto1.getPrecio();
//Prueba 2 Augusto
const producto2 = new Producto("Mouse gaming","Red Dragon","cba321","Mouse para gamers","Tecnologia",5893);
const carrito1 = new Carrito();
carrito1.agregarProducto(producto2);
const cantidadCarrito = carrito1.productos.length;

// Prueba Santi
const producto3 = new Producto("SmartPhone Motog20", "Motorola", "#4536ts", "Celular inteligente", "Tecnología", 21000);
const categoria = new Categoria("SmartPhones");
categoria.asociarProducto(producto3);
const cantidadCategoria= categoria.productos.length;
//Prueba 2 Santi
const longitudNombre = producto3.nombre.length;

// Prueba Gonzalo
const productGonza = new Producto("Iphone 13 Pro Max", "Apple", "#131313", "Celular inteligente", "Tecnología", 120000, 10);
const actualStock = productGonza.stock;
const decrementStock = (stock, numberItems) => {
    return (stock - numberItems);
}
const incrementStock = (stock, numberItems) => {
    return (stock + numberItems);
}

// Prueba Fernando 1
const productFernando = new Producto("G7", "Motorola", "#131313", "Celular inteligente", "Tecnología", 6000, 5);
const codigo = productFernando.codigo;

// Prueba Fernando 2
const carritoFernando = new Carrito();
carritoFernando.agregarProducto(producto2);
const detalleCarrito = carritoFernando.detalle;

// Prueba Facundo 1
const productoFacundo = new Producto("240G", "HP", "#252356", "Notebook All in One", "Tecnología", 50000 ,8);
const cantidadDescripcion = productoFacundo.descripcion.length;

// Prueba Facundo 2
const precioProductoFacundo = productoFacundo.precio;

// Prueba Julieta 1
const productoJulieta = new Producto("Monitor Curvo 27", 'Samsung', '#22655656', 'Este monitor de 27" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad', 'Monitores' , 20000, 63);
const prodCategoriaJuli = productoJulieta.getCategoria();

// Prueba Julieta 2
const envioJulieta = new Envio('Mendoza', 'Godoy Cruz', 5501, 250);
const precioEnvioJulieta = envioJulieta.getPrecioEnvio();

//Objeto que contiene los datos a probar
 const functions = {
    precio,
    cantidadCarrito,
    cantidadCategoria,
    longitudNombre,
    actualStock,
    decrementStock,
    incrementStock,
    codigo,
    detalleCarrito,
    cantidadDescripcion,
    precioProductoFacundo,
    prodCategoriaJuli,
    precioEnvioJulieta
}

module.exports=functions;
