/// <reference types="Cypress" />

describe('Iterate over element', () => {
  it('Log products', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').each(($el, idx, $list) => {
      cy.log(`Index: ${idx} : ${$el.text()}`);
    });
  });
  it('Add products to basket', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').each(($el, idx, $list) => {
      if ($el.text().includes('Curls to straight Shampoo')) {
        cy.wrap($el).click();
      }
    });
  });
});
