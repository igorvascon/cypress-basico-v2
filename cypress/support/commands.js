Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    let Nome = 'Igor'
    let Sobrenome = 'Vasconcelos'
    let Email = 'igor.udi@live.com'

    cy.get('#firstName').type(Nome, { delay: 0 }).should('have.value', Nome)
    cy.get('#lastName').type(Sobrenome, { delay: 0 })
    cy.get('#email').type(Email, { delay: 0 })
    cy.get('#open-text-area').type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum', { delay: 0 })
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
})