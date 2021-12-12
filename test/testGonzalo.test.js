
//Test Gonzalo
functions = require('../src/codigo.js');

describe('Prueba decremento de stock',() => {
    it('Se debe demostrar que al añadir un elemento al carrito el stock del producto disminuye', () => {
        expect(functions.decrementStock(functions.actualStock, 10)).toBe(0);
    });
});

describe('Prueba incremento de stock',() => {
    it('Se debe demostrar que al eliminar un elemento al carrito el stock del producto incrementa', () => {
        expect(functions.incrementStock(functions.actualStock, 2)).toBe(12);
    });
});
