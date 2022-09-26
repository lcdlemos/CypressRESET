import Busca from '../support/buscaPO.js';

const busca = new Busca();
context('Busca', () => {
    it('Busca no Google', () => {
        busca.acessar();
        busca.buscar();
        busca.verificar();    
    });
});