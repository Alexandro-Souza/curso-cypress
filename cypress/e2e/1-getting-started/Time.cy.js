/// <reference types="cypress" />

describe('o clock',()=> {
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    it('voltando ao passado com o clock', () => {
        cy.get('#buttonNow').click()
        // isto e e o coparativo 
        cy.get('#resultado > span').should('contain', '23/08/2023')

        // O clock subscreve da data que estamos podendo alterar
        //cy.clock()
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2029, 5, 7, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '07/06/2029')
       
    })

    it.only('indo para o futuro', () => {
       // cy.get('#buttonTimePassed').click()
        //cy.get('#resultado > span').should('contain','16928')
       // cy.get('#resultado > span').invoke('text').should('gt','1875581400000')

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.wait(1000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 1000)


        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)
        cy.tick(50000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 50010)

        
    })



  })