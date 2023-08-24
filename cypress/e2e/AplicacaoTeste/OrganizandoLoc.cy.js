/// <reference types="cypress" />
 import loc from "../../support/Locator"
describe('Hello Login',()=> {
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('souzajr1998@gmail.com')
        cy.get(loc.LOGIN.PASSWORD).type('Teste123')
        cy.get(loc.LOGIN.BTN_LOGIN).click()

    })
    
    it('Organizacao', () => {

       
       
    })


  })