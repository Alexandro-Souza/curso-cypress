/// <reference types="cypress" />

// Describe e um Grupod de teste

describe('Iniciando cypress',()=>{
// o It e o ambiente de teste
it('Visitando um site e fazendo uma afirmativa',()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.pause()

   // Podemos validar desta forma o teste
    cy.title().should('be.equal','Campo de Treinamento')
    cy.title().should('contain','Campo')
  
    // Podemos otimizar o codigo para nao ficar reescrevendo

    cy.title()
        .should('be.equal','Campo de Treinamento')
        .and('contain','Campo')


})

it('Encontrar um botao e interagir com o botao ',()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple').click()
                           .should('have.value','Obrigado!')

})








})