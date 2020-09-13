/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });
  it('Submit form success', function () {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    cy.contactFormSubmission(
      Cypress.env('first_name'),
      this.data.last_name,
      this.data.email,
      this.data.body,
      'h1',
      'Thank You for your Message!'
    );
  });
  it('Submit form error', function () {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.contactFormSubmission(
      this.data.first_name,
      this.data.last_name,
      ' ',
      'Hello World!',
      'body',
      'Error: Invalid email address'
    );
  });
});
