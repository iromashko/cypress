/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });
  it('Submit form success', function () {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href$='contact']")
      .click()
      .then(function (linkText) {
        cy.log('Clicked link ' + linkText.text());
      });
    cy.get('#ContactUsFrm_first_name').type(this.data.first_name);
    cy.get('#ContactUsFrm_first_name').type(this.data.first_name);
    cy.get('#ContactUsFrm_email').type(this.data.email);
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    cy.get('#ContactUsFrm_enquiry').type(
      'lorem ipsum dolor sit amet, consectetur adipiscing elit'
    );
    cy.get('button[title="Submit"]').click();
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!'
    );
    cy.log(`Test has completed`);
  });
});
