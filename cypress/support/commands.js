// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import cypress from 'cypress'
import loc from './Locator'


Cypress.Commands.add('ClickAlert',(locator, menssage)=>{
    cy.get(locator).click()
    cy.on('window:alert', msg =>{
         expect(msg).to.be.equal(menssage)
    })

})

Cypress.Commands.add('Login', (user, passwd)=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('souzajr1998@gmail.com')
        cy.get(loc.LOGIN.PASSWORD).type('Teste123')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('ResetApp', () =>{
     cy.get(loc.MENU.SETTINGS).click()
     cy.get(loc.MENU.RESET_ACCOUNT).click()
     
     
})

//Cypress.Commands.add('getToken', ('user, passwd') => {
  //   cy.request({
    //      method: 'POST',
     //     url: 'https://barrigarest.wcaquino.me/signin',
     //     body:{
     //       email: user,
     //       redirecionar: false,
     //       senha: passwd
     //     }
     // }).its('body.token').should('not.be.empty')
     //     .then(token =>{
      //         return token
       //   })
//})

/*Cypress.Commands.add('resetRest',()=>{
     cy.getToken('souzajr1998@gmail.com', 'Teste123').then( => {
          cy.request({
               method: 'GET',
               url: 'https://barrigarest.wcaquino.me/reset'
     
          })

     })
     cy.request({
          method: 'GET',
          url: 'https://barrigarest.wcaquino.me/reset',
          headers: { Authorization: `JWT ${token}` },


     })
})

*/