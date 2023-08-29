/// <reference types="cypress" />
import loc from "../../support/commands"

describe('HelloBackend', ()=> {
    before(()=>{
      
      

    })
    // Aplicando o reset 

    beforeEach(()=>{
      cy.resetRest()
    })


    it('Logando uma conta em backend',()=>{
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body:{
              email: "souzajr1998@gmail.com",
              redirecionar: false,
              senha: "Teste123"
            }
        }).its('body.token').should('not.be.empty')
        .then(token => {
             cy.request({
                url: 'https://barrigarest.wcaquino.me/contas',
                method: 'POST',
                headers: { Autorization: `JWT ${token}`},
                body: {
                  nome: 'Conta Backend'
                }
            }).then(res => console.log(res))

            


        })
        it('Alterando uma conta via backend', () => {
          cy.request({
            url: 'https://barrigarest.wcaquino.me/contas/',
            method: 'PUT',
            headers: { Authorization: `JWT ${token}` },
            qs:{
              nome: 'Para altera'
            }
          }).as('response')

          cy.get('@response').its('status').should('be.equal', 200)
        })


    })

   

    
    
    
  })