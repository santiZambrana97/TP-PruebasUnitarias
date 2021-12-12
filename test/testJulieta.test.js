const { it } = require('@jest/globals');


// test 1: Cada producto tiene que pertenecer como mínimo a una categoría
functions = require('../src/codigo.js');
describe('Prueba cada producto tiene que pertenecer como mínimo a una categoría',() => {
    it('Cada producto tiene que pertenecer como mínimo a una categoría', () => {
        expect(functions.prodCategoriaJuli).not.toBe("");
    });
});


// test 2: Los costes de envío deben ser no negativos
functions = require('../src/codigo.js');
describe('Prueba los costes de envío deben ser no negativos',() => {
    it('Prueba los costes de envío deben ser no negativos', () => {
        expect(functions.precioEnvioJulieta).toBeGreaterThan(0);
    });
});