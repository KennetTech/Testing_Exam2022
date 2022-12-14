Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Grannys Bakery Mekka', () => {
  it('long workflow', () => {
    cy.visit('http://localhost:5500/index.html')

    cy.get('input[id=lbsInput]').type(200)
    cy.get('input[id=cmsInput]').type(200)
    cy.get('span[id=kgsOutput]').should('contain', 91)
    cy.get('span[id=feetOutput]').should('contain', 7)

    cy.get('table[id=recipe1Table]').find('tr').should('contain', "Pancakes")
    cy.get('table[id=recipe1Table]').find('tr').should('contain', "100°C")

    cy.get('h1[id=title]').click()
    cy.get('span[id=kgsOutput]').should('contain', "")
    cy.get('span[id=feetOutput]').should('contain', "")

    cy.get('div[id=rickroll]').click()
  })
})