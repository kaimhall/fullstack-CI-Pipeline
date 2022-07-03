describe('phonebook', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3001')
  })

  it('frontpage can be opened', () => {
    cy.contains('Phonebook')
    cy.contains('Numbers')
  })

  it('person can be added', () => {
    cy.get('form > :nth-child(1) > input').type('john doe')
    cy.get(':nth-child(2) > input').type('010-123456')
    cy.get(':nth-child(3) > button').click()
    cy.contains('Added john doe')
  })

  it('view can be filtered', () => {
    cy.get('#root > :nth-child(1) > :nth-child(2)').type('mike smith')
    cy.contains('john doe').should('not.exist')
  })

  it('person can be deleted', () => {
    cy.get('#root > :nth-child(1) > :nth-child(2)').type('john doe')
    cy.contains('delete').click()
    cy.contains('Deleted john doe')
  })
})