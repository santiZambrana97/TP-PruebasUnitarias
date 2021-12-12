//EJEMPLO JEST
/*
const { it } = require('@jest/globals');
const { test } = require('picomatch');
const sum = require('../src/codigo.js');

describe('Pruebas para sumas', () => {
    it('1 + 2 es 3', () => {
        expect(sum(1,2)).toBe(3);    
    });
    it('1 + 5 es 6', () => {
        expect(sum(1,5)).toBe(6);    
    });
})
*/
const { it } = require('@jest/globals');
//Test 1
functions = require('../src/codigo.js');
describe('Prueba precio distinto de 0',() => {
    it('Demostrar precio distinto de 0', () => {
        expect(functions.precio).not.toBe(0);
    });
});

//Test 2
functions = require('../src/codigo.js');
describe('Prueba carrito no vacio',() => {
    it('Demostrar que el carrito no esta vacio', () => {
        expect(functions.cantidadCarrito).not.toBe(0);
    });
});





