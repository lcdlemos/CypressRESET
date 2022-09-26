class Busca{
    acessar(){
        cy.visit('https://www.google.com.br/');
    }
    buscar(){
        cy.get('[title="Pesquisar"]').type('API').type('{enter}');
    }
    verificar(){
        cy.contains('API');
    }
}
export default Busca;