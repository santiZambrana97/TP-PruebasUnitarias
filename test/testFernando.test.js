
//Test Fernando
functions = require('../src/codigo.js');

describe('Prueba Todo producto debe contar con un código asociado',() => {
    it('Se debe demostrar que un producto tiene un codigo', () => {
        expect(functions.codigo).not.toBe("");
    });
});

//Test Fernando
functions = require('../src/codigo.js');

describe('El carrito debe tener asociado un detalle.',() => {
    it('Se debe demostrar que el carrito tiene que tener un detalle', () => {
        expect(functions.detalleCarrito.precioTotal).not.toBe("");
        expect(functions.detalleCarrito.iva).not.toBe("");
    });
});
