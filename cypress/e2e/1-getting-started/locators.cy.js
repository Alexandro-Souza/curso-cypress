/// <reference types="cypress" />

describe('locators', ()=>{
    // este comando evita a repetição de entrada da tela toda vez que fazemos um bloco de teste gerando assim otimização no teste
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // o xpath foi criado para criar caminhos em Xpath
    it('usando o Xpath',()=>{
        cy.xpath('//input[contains(@onclick,\'francisco\')]')
        
        
    })


})