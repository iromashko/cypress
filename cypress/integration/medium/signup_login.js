/// <reference types='Cypress' />

describe('Signup', () => {
  let randomString = Math.random().toString(36).substring(2);
  it('Signup User', () => {
    cy.visit(Cypress.env('mediumUrl'));
    cy.get('[data-cy=register]').click();
    cy.get('[data-cy="register:username"]').type(`Auto_${randomString}`);
    cy.get('[data-cy="register:email"]').type(
      `Auto_email_${randomString}@gmail.com`
    );
    cy.get('[data-cy="register:password"]').type('Password1');
    cy.get('[data-cy="register:submit"]').click();
  });
});
