/// <reference types="Cypress" />
import AutoStore_HomePage_PO from '../../support/pageObjects/automation-test-store/auto-store.homepage.js';
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/auto-store.hair-care-po';

describe('Add multiple items to basket', () => {
  const autoStoreHomePagePO = new AutoStore_HomePage_PO();
  const autoStoreHairCarePO = new AutoStore_HairCare_PO();

  before(function () {
    cy.fixture('products').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStoreHomePagePO.accessHomePage();
    autoStoreHomePagePO.clickOnHairCareLink();
  });

  it('Add specific item to basket', function () {
    autoStoreHairCarePO.addHairCareProductsToBasket();
  });
});
