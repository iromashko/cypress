/// <reference types="Cypress" />

describe('Chain of commands', () => {
  it('First item using selector', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get(
      '#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname'
    ).click();
  });
  it('First item using text', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
  });
  it('First item using index', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
