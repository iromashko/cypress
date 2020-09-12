/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  before(function () {
    cy.fixture('user-details').as('user');
  });
  it('Submit form success', function () {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href$='contact']")
      .click()
      .then(function (linkText) {
        cy.log('Clicked link ' + linkText.text());
      });
    cy.get('@user').then((user) => {
      cy.get('#ContactUsFrm_first_name').type(user.first_name);
      cy.get('#ContactUsFrm_email').type(user.email);
    });
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
