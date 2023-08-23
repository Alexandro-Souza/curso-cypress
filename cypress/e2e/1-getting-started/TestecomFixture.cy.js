/// <reference types="cypress" />

describe('Fixture Test',()=> {
      it('Obter dados com Fixture', function (){

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.fixture('dadosdeusuario').as('dados').then(() =>{
          cy.get('#formNome').type(this.nome)
          cy.get('#formSobrenome').type(this.sobrenome)
          cy.get('[name=formSexo][value=${this.dados.sexo}]').click()
          cy.get('#[name=formComidaFavorita][value=${this.usuario.comida}]').click()
          cy.get('#formEscolaridade').select(this.dados.escolaridade)
          cy.get('#formEsportes').select(this.dados.espoerte)
        
          cy.get('#formCadastrar')
          cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
      })

    })


})
