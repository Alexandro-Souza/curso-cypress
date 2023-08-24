/// <reference types="cypress" />
import loc from "../../support/Locator"
import "../../support/commands"


describe('Hello', ()=> {
    before(()=>{
      
      cy.login()
      cy.ResetApp()

    })
    
  })