/// <reference types="Cypress" />

describe('Verify commands', () => {
  it('Navigating', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
    cy.get("a[href*='product/category&path=']").contains('Skincare').click();
  });
  it('Navigating page', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();

    cy.get('h1 .maintext').then(($headerText) => {
      const headerText = $headerText.text();
      cy.log(headerText);
      expect(headerText).is.eq('Makeup');
    });
  });
  it.only('Validate properties', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact');

    cy.contains('#ContactUsFrm', 'Contact Us Form')
      .find('#field_11')
      .should('contain', 'First name');

    cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
      const firstNameText = text.find('#field_11').text();
      expect(firstNameText).to.contain('First name');

      //embedded commands (closure)
      cy.get('#field_11').then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
