describe('login test', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="loginHeader"]').should('be.visible').contains('Recipe')
    cy.get('[data-test="loginName"]').should('be.visible').type('Asp')
    cy.get('[data-test="loginPassword"]').should('be.visible').type('clarusway')
    cy.get('[data-test="loginSbmt"]').should('be.visible').click()
    cy.url().should('include', '/home')
  })
  
  
})