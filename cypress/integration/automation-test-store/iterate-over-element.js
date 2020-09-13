/// <reference types="Cypress" />

describe('Iterate over element', () => {
  beforeEach(() => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  });

  it('Log products', () => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, idx, $list) => {
      cy.log(`Index: ${idx} : ${$el.text()}`);
    });
  });
  it('Add products to basket', () => {
    cy.selectProduct('Curls to straight Shampoo');
  });
  it('Add another products to basket', () => {
    cy.selectProduct('Seaweed Conditioner');
  });
});
