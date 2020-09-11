/// <reference types='Cypress' />

describe('Interact with dropdowns', () => {
  it('Select specific values', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.get('#dropdowm-menu-1').select('c#');
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
    cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery');

    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
    cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
  });
});
