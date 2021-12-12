const { it } = require('@jest/globals');
//Test 1
functions = require('../src/codigo.js');
describe('Prueba descripcion productos menor a 200',() => {
    it('Demostrar descripcion producto menor a 200 caracteres', () => {
        expect(functions.cantidadDescripcion).toBeLessThan(200);
    });
});

//Test 2
functions = require('../src/codigo.js');
describe('Todo producto debe tener un precio',() => {
    it('Demostrar que un producto debe tener un valor en precio', () => {
        expect(functions.precioProductoFacundo).not.toBeNull();
    });
});