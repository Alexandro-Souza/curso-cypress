/// <reference types="cypress" />

describe('Elementos Basicos', ()=>{
    // este comando evita a repetição de entrada da tela toda vez que fazemos um bloco de teste gerando assim otimização no teste
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // este aqui recarrega a tela toda vez que um teste inicia
    beforeEach(()=>{
        cy.reload()
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Text',()=>{
        //  cy.visit('https://wcaquino.me/cypress/componentes.html')
        // Aqui estamos buscando maneiras diferentes de busca o texto Cuidado na tela
        // com body conseguimos bucar dentro da tela mas fica mais generalizado na tela poderiamos tem mais doque um
        cy.get('body').should('contain','Cuidado')
        // Ja no span temos uma area mais limitada dentro do propio HTML conseguimos fazer a assertiva com mais precisão
        cy.get('span').should('contain','Cuidado')
        // Aqui restringimos um pouco mais a busca deixando mais acertivo o teste automatizado
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')

    })
    it('Links',() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')


    })

    it('Campo de Texto',() => {
        // Aqui estamos pedindo para o cypress escrever no campo
        cy.get('#formNome').type('Helloo Cypress')
        // fazendo a acertiva note que uso value porque geralmente em campo de texto passamos um valor
        cy.get('#formNome').should('have.value','Helloo Cypress')

        cy.get('#elementosForm\\:sugestoes')
              .type('Dando uma sugestao para o campo sugestão')
              .should('have.value', 'Dando uma sugestao para o campo sugestão')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('Certo')
        
        
        cy.get('[data-cy=dataSobrenome]').type('Santos')

    })
    // Testando radio butto aqui estamos fazendo duas assertivas um no botao que esta clicado e ou outro ver se ele nao esta clicado
    it('radio button',()=>{
        cy.get('#formSexoMasc').click()
        cy.get('#formSexoMasc').should('be.checked')
        cy.get('#formSexoFem').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)

    })
    it('Checkbox',()=>{
        cy.get('#formComidaFrango').click()
        cy.get('#formComidaFrango').should('be.checked')
        cy.get('#formComidaCarne').should('not.be.checked')
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('not.be.checked')
        //Clicando em todos de uma vez so
        cy.get('[name=formComidaFavorita]').click({multiple: true})
        

    })
    it('Combo box',()=>{

        cy.get('[data-test="dataEscolaridade"]').select('2o grau completo')
        cy.get('[data-test="dataEscolaridade"]').should('have.value', '2graucomp')
       
    })
    it('Combo multiplo',()=>{
        cy.get('[data-testid="dataEsportes"]').select(['natacao','Corrida'])
    })

    it('Combo multiplo',()=>{
        cy.get('[data-test=dataEscolaridade] option').should('have.length', 8)
    })

    it.only('Combo multiplo',()=>{
        //cy.get('[data-testid="dataEsportes"]').should('have.value', ['natacao','Corrida', 'nada'])
        cy.get('[data-testid="dataEsportes"]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao','Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })

    })

    it.only('Confirm',()=>{
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })



})