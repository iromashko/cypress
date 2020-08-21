/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  it('Submit form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    // cy.get('#contact-us').click();
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('Doe');
    cy.get('[name="email"]').type('example@email.com');
    cy.get('textarea.feedback-input').type('Lorem ipsum dolor amet');
  });
  it('Invalid Submission', () => {});
});
