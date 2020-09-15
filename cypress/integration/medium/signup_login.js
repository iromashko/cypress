/// <reference types='Cypress' />

describe('Signup', () => {
  let randomString = Math.random().toString(36).substring(2);
  let username = `auto${randomString}`;
  let email = `auto_${randomString}@email.com`;
  let password = 'Password1';

  beforeEach(() => {
    cy.visit(Cypress.env('mediumUrl'));
  });

  it('Signup User', () => {
    // cy.server();
    // cy.route({ method: 'POST', url: '**/users' }).as('newUser');

    cy.get('[data-cy=register]').click();
    cy.get('[data-cy="register:username"]').type(username);
    cy.get('[data-cy="register:email"]').type(email);
    cy.get('[data-cy="register:password"]').type(password);
    cy.get('[data-cy="register:submit"]').click();

    // cy.wait('@newUser');
    // cy.get('@newUser').should((xhr) => {
    //   expect(xhr.status).to.eq(200);
    // expect(xhr.request.body.user.username).to.eq(`Auto_${randomString}`);
    // expect(xhr.request.body.user.email).to.eq(`Auto_email_${randomString}@gmail.com`);
    // });

    cy.get('[data-cy="profileName"]').contains(randomString);
  });

  it('Test valid login', () => {
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy="login:email"]').type(email);
    cy.get('[data-cy="login:password"]').type(password);
    cy.get('[data-cy="login:submit"]').click();

    cy.get('[data-cy="profileName"]').contains(username);
  });
});
