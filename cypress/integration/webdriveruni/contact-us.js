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
    cy.get('[name="first_name"]').type(this.data.first_name);
    cy.get('[name="last_name"]').type(this.data.last_name);
    cy.get('[name="email"]').type(this.data.email);
    cy.get('textarea.feedback-input').type(this.data.body);
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });
  it('Submit form error', function () {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.get('[name="first_name"]').type(this.data.first_name);
    cy.get('[name="last_name"]').type(this.data.last_name);
    cy.get('textarea.feedback-input').type(this.data.body);
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
  });
});
