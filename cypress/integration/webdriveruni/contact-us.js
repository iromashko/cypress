/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  it('Submit form success', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('Doe');
    cy.get('[name="email"]').type('example@email.com');
    cy.get('textarea.feedback-input').type('Lorem ipsum dolor amet');
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });
  it('Submit form error', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('Doe');
    cy.get('textarea.feedback-input').type('Lorem ipsum dolor amet');
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
  });
});
