/// <reference types="cypress" />

describe('Hello Login',()=> {
    before(()=>{
        // The login was insert on before, because all time when access page should be contain access page
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('souzajr1998@gmail.com')
        cy.get('[data-test="passwd"]').type('Teste123')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })
    
    it('inserir uma conta', () => {

        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta de Teste')
        cy.get('.btn').click()
        cy.get('.toast').should('contain','Conta inserida com sucesso')
       
    })


  })