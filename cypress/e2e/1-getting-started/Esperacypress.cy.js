/// <reference types="cypress" />

describe('Espera',()=>{

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        //cy.reload()

    })

    it('Deve aguardar elemento estar disponivel',()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#NovoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })
    it('Deve fazer retrys',()=>{
       
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
       
    })

    it('uso do timeout',()=>{
        cy.wait(5000)
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', {timeout: 10000}).should('exist')

    })

    it('Should vs Then',()=>{
       
        cy.get('#ButtonListDOM').click()
        cy.get('#lista li span').then($el =>{
            expect($el).to.have.length(1)
            
        })


        
    })


})