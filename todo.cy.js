context('TodoMVC', () => {
    it('Adicionar uma nova tarefa', () => {
        cy.visit ('http://todomvc-app-for-testing.surge.sh/');
        cy.get('input.new-todo').type('Estudar automação de testes{enter}');
        //Validação / Asserção
        cy.get('ul.todo-list li').should('have.length', 1);
    })
});