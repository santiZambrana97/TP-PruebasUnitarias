
//Test 1 Santi
const { it } = require('@jest/globals');
functions = require('../src/codigo.js');
describe('Prueba categoria no vacia',() => {
    it('Demostrar que una categoria tiene asociado un producto', () => {
        expect(functions.cantidadCategoria).not.toBe(0);
    });
});

//Test 2 Santi
functions = require('../src/codigo.js');
describe('Prueba longitud de caracteres',() => {
    it('Demostrar que la longitud del nombre de un producto esta entre 5 y 30 caracteres', () => {
        expect(functions.longitudNombre).toBeGreaterThanOrEqual(5);
        expect(functions.longitudNombre).toBeLessThanOrEqual(30);
    });
});

