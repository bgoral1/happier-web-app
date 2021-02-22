describe('app', () =>{
  it('works', () => {
    cy.visit('/')
    cy.findAllByRole('button', {name: /search/i})
      .last()
      .click()
    cy.findAllByRole('heading', {name: /Dogs for adoption/i})
  });

  it('change pet type to cat', () => {
    cy.visit('/')
    cy.findAllByRole('button', {name: /Find a cat/i})
      .last()
      .click()
    cy.findAllByRole('button', {name: /search/i})
      .last()
      .click()
    cy.findAllByRole('heading', {name: /Cats for adoption/i})
  });
});