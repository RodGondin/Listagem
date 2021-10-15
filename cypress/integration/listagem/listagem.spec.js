describe('Listagem UI', () => {

  it('Should exec the application', () => {
    cy.visit('/')
  })

  it('Should active the menu button and close', () => {
    cy.visit('/')

    cy.get('[data-cy=menu]').click()
    cy.get('[data-cy=menu]').click()
  })

  it('Should active the checkbox button and remove three columns', () => {
    cy.visit('/')

    cy.get('[data-cy=menu]').click()
    cy.get('[data-cy=checkbox-client]').click()
    cy.get('[data-cy=checkbox-qtdchargeback]').click()
    cy.get('[data-cy=checkbox-valorchargeback]').click()
  })
})