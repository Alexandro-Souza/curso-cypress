/// <reference types="cypress" />

describe('Testes Dinamicos', ()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
   
    const food = ['Carne','Frango','Pizza','Vegetariano']
    food.forEach(food=>{
        it(`Cadastro com Comida variada ${food}`,()=>{
            cy.get('#formNome').type('Alexandro')
              cy.get('#formSobrenome').type('Junior')
              cy.get('[name=formSexo][value=M]').click()
              cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
              cy.get('#formEscolaridade').select('Doutorado')
              cy.get('#formEsportes').select('Corrida')
              cy.get('#formCadastrar').click()
              cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
    
       })


    })
    
    it.only('Deve selecionar todos usando each',()=>{
        cy.wait(10000)
        cy.get('#formNome').type('Alexandro')
        cy.get('#formSobrenome').type('Junior')
        cy.get('[name=formSexo][value=M]').click()
        
        
        cy.get('[name=formComidaFavorita]').each($el => {
            if($el.val() != 'vegetariano')
            cy.wrap($el).click( )

        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
        //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano')


 })
   


})