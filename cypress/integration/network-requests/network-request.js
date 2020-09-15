/// <reference types="cypress" />

describe('Network Requests', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');

    cy.server();
  });

  it('Get Request', () => {
    cy.route({ method: 'GET', url: 'comments/*' }).as('getComment');

    cy.get('.network-btn').click();

    cy.wait('@getComment').its('status').should('eq', 200);
  });
});
