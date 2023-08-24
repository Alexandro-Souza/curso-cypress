/// <reference types="cypress" />

describe('HelloBackend', ()=> {
    before(()=>{
      
      

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
                headers: { Autorization: `ALS ${token}`},
                body:{
                  nome: 'Conta Backend'
                }
            }).then(res => console.log(res))


        })


    })
    
    
  })