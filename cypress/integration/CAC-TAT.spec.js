/// <reference types ="Cypress" />

describe('Central de atendimento CAC-TAT', function () {

    beforeEach(function () {
        cy.visit('./src/index.html')
    })
    it('verifica o titulo da operação', function () {
            //cy.visit('./src/index.html')
            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it ('preenche os campos obrigatórios e envia o formulário', function () {
        let Nome = 'Igor'
        let Sobrenome = 'Vasconcelos'
        let Email = 'igor.udi@live.com'

        //cy.visit('./src/index.html')
        cy.get('#firstName')
        .type(Nome, {delay: 0})
        .should('have.value', Nome)

        cy.get('#lastName')
        .type(Sobrenome, {delay: 0})

        cy.get('#email')
        .type(Email, {delay: 0})

        cy.get('#open-text-area')
        .type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', {delay: 0})

        cy.get('.button')
        .click()

        cy.get('.success')
        .should('be.visible')

    })

    it ('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

        const Nome = 'Igor'
        const Sobrenome = 'Vasconcelos'
        const Email = 'igor.udi@@@@@live.com'

        cy.get('#firstName').type(Nome, {delay: 0}).should('have.value', Nome)
        cy.get('#lastName').type(Sobrenome, {delay: 0})
        cy.get('#email').type(Email, {delay: 0})
        cy.get('#open-text-area').type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', {delay: 0})
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it ('Verificar se o campo vai rejeitar o telefone quando digitar letras', function () {
        const Nome = 'Igor'
        const Sobrenome = 'Vasconcelos'
        const Email = 'igor.udi@live.com'
        const Telefone = 'ABC'

        cy.get('#firstName').type(Nome, {delay: 0})
        cy.get('#lastName').type(Sobrenome, {delay: 0})
        cy.get('#email').type(Email, {delay: 0})
        cy.get('#open-text-area').type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', {delay: 0})
        cy.get('#phone').type(Telefone).should('have.value', "")
        cy.get('.button').click()
    })

    it ('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Igor', {delay: 0})
        cy.get('#lastName').type('Vasconcelos', {delay: 0})
        cy.get('#email').type('igor.udi@live.com', {delay: 0})
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Teste', {delay: 0})
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it ('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        const Nome = 'Igor'
        const Sobrenome = 'Vasconcelos'
        const Email = 'igor.udi@live.com'
        const Telefone = '34992055639'
        const longText = 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum'

        cy.get('#firstName')
            .type(Nome, {delay: 0})
            .should('have.value', Nome)
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type(Sobrenome, {delay: 0})
            .should('have.value', Sobrenome)
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .type(Email, {delay: 0})
            .should('have.value', Email)
            .clear()
            .should('have.value', '')

        cy.get('#open-text-area')
            .type(longText, {delay: 0})
            .should('have.value', longText)
            .clear()
            .should('have.value', '')

        cy.get('#phone').type(Telefone)
            .should('have.value', Telefone)
            .clear()
            .should('have.value', '')
    })

    it ('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it ('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function () {
        let Nome = 'Igor'
        let Sobrenome = 'Vasconcelos'
        let Email = 'igor.udi@live.com'

        cy.get('#firstName').type(Nome, {delay: 0}).should('have.value', Nome)
        cy.get('#lastName').type(Sobrenome, {delay: 0})
        cy.get('#email').type(Email, {delay: 0})
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
        cy.get('#open-text-area').type('Teste', {delay: 0})
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })

    it ('seleciona um produto (Mentoria) por seu valor (value)', function () {
        let Nome = 'Igor'
        let Sobrenome = 'Vasconcelos'
        let Email = 'igor.udi@live.com'

        cy.get('#firstName').type(Nome, {delay: 0}).should('have.value', Nome)
        cy.get('#lastName').type(Sobrenome, {delay: 0})
        cy.get('#email').type(Email, {delay: 0})
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
        cy.get('#open-text-area').type('Teste', {delay: 0})
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })

    it ('seleciona um produto (Blog) por seu índice', function () {
        let Nome = 'Igor'
        let Sobrenome = 'Vasconcelos'
        let Email = 'igor.udi@live.com'

        cy.get('#firstName').type(Nome, {delay: 0}).should('have.value', Nome)
        cy.get('#lastName').type(Sobrenome, {delay: 0})
        cy.get('#email').type(Email, {delay: 0})
        cy.get('#product').select(3).should('have.value', 'mentoria')
        cy.get('#open-text-area').type('Teste', {delay: 0})
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })

    it ('marca o tipo de atendimento "Feedback"', function () {
        cy.get('input[type="radio"]').check('feedback').should('be.checked')
    })

    it ('marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            //percorre por cada elemento, indo 1 a 1
            .each(function($radio) {
                //junta tudo para fazer a verificação no .check
                cy.wrap($radio).check()
                .should('be.checked')
            })
    })

    it ('marca ambos checkboxes, depois desmarca o último', function () {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
        cy.get('input[type="checkbox"]')
            .last()
            .uncheck()
            .should('not.be.checked')
    })

    it ('seleciona um arquivo da pasta fixtures', function () {
        cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it ('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function () {
        cy.get('a')
            .should('have.attr', 'target', '_blank')
    })

    it ('testa a página da política de privacidade de forma independente', function () {
        cy.get('a')
            .invoke('removeAttr', 'target')
            .click()

        cy.get('#white-background')
            .should('not.be.empty')
        
        cy.get('#title')
            .should('be.visible')
            .should('have.text', 'CAC TAT - Política de privacidade')
    })
})

