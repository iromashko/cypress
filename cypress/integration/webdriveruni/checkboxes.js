/// <reference types='Cypress' />

describe('Verify checkboxes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  it('Check and validate checkbox', () => {
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
    cy.get('@option-1').check().should('be.checked');
  });

  it('Uncheck checkbox', () => {
    cy.get('#checkboxes > :nth-child(5) > input').as('option-3');

    cy.get('@option-3').uncheck();
    cy.get('@option-3').should('not.be.checked');
  });

  it('Check multiple checkboxes', () => {
    cy.get('input[type=checkbox]')
      .check(['option-1', 'option-2', 'option-3', 'option-4'])
      .should('be.checked');

    // cy.get('input[type=checkbox]').as('options');
    // cy.get('@options').check();
    // cy.get('@options').should('be.checked');
  });
});
