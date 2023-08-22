/// <reference types="cypress"/>

describe('Helpers...',()=>{
    it('Wrap',()=>{
        const obj = { nome: 'User', idade: 20 }
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('funciona')

    })

    it('its...',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        const obj = { nome: 'User', idade: 20 }
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome','User')
        cy.wrap(obj).its('nome').should('be.equal','User')
    
        

    })

    it.only('invoke...',()=>{
        const getValue = () => 1;
        const soma = (a, b) => a + b;


        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)


 
    })

})