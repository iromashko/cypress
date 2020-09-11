/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  it('Submit form success', () => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('Doe');
    cy.get('[name="email"]').type('example@email.com');
    cy.get('textarea.feedback-input').type('Lorem ipsum dolor amet');
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });
  it('Submit form error', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('Doe');
    cy.get('textarea.feedback-input').type('Lorem ipsum dolor amet');
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
  });
});
