/// <reference types="Cypress" />

describe('Add multiple items to basket', () => {
  before(function () {
    cy.fixture('products').then(function (data) {
      this.data = data;
    });
  });

  beforeEach(() => {
    cy.visit('https://www.automationteststore.com/');
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  });

  it('Add specific item to basket', function () {
    this.data.productName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
  });
});
