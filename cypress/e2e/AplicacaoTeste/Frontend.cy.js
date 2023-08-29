/// <reference types="cypress" />
import loc from "../../support/Locator"
import "../../support/commands"


describe('Hello Login for front end', () => {
    before(() => {
        cy.server()
        cy.route({
            method: 'POST',
            url: '/signin',
            response: {
                id: 1000,
                nome: 'Usuario falso',
                token: 'Uma string muito grande que nao deveria ser aceito'
            }
        }).as('signin')
        cy.Login('souzajr1998@gmail.com','Teste123')
    })

    


  })