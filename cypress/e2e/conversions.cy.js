Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Grannys Bakery Mekka', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/index.html')
  })

  it('kgs to lbs', () => {
    cy.get('input[id=kgsInput]').type(200)
    cy.get('span[id=lbsOutput]').should('contain', 441)
  })

  it('lbs to kgs', () => {
    cy.get('input[id=lbsInput]').type(200)
    cy.get('span[id=kgsOutput]').should('contain', 91)
  })

  it('celcius to fahrenheit', () => {
    cy.get('input[id=celsiusInput]').type(200)
    cy.get('span[id=fhtOutput]').should('contain', 392)
  })

  it('fahrenheit to celcius', () => {
    cy.get('input[id=fahrenheitInput]').type(200)
    cy.get('span[id=celsOutput]').should('contain', 93)
  })

  it('feet to cm', () => {
    cy.get('input[id=feetInput]').type(200)
    cy.get('span[id=cmsOutput]').should('contain', 6096)
  })

  it('cm to feet', () => {
    cy.get('input[id=cmsInput]').type(200)
    cy.get('span[id=feetOutput]').should('contain', 7)
  })

  it('milliliter to ounces', () => {
    cy.get('input[id=milliliterInput]').type(200)
    cy.get('span[id=ozOutput]').should('contain', 7)
  })

  it('ounces to milliliter', () => {
    cy.get('input[id=ounceInput]').type(200)
    cy.get('span[id=mlOutput]').should('contain', 5914)
  })
})
