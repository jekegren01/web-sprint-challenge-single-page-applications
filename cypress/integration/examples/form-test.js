describe('form test', () => {
    it('test that the form is working', () => {
        cy.visit('/')

        cy.get('[name="name"]')
        .type('Jacob')
        .should('have.value', 'Jacob')

        cy.get('[name="pepperoni"]')
        .click()
        .should('have.checked', true)

        cy.get('[name="olives"]')
        .click()
        .should('have.checked', true)

        cy.get('button')
        .click()
    })
})