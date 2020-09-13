/// <reference types="Cypress" />
import Homepage_PO from '../../support/pageObjects/webdriver-uni/home_page_po.js';
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/contact_us_po.js';

describe('Test Contact Us form via WebdriverUni', function () {
  Cypress.config('defaultCommandTimeout', 20000);
  const contactUs_PO = new ContactUs_PO();
  const homepage_PO = new Homepage_PO();

  before(() => {
    cy.fixture('example').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
  });
  it('Submit form success', function () {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    contactUs_PO.contactFormSubmission(
      Cypress.env('first_name'),
      globalThis.data.last_name,
      globalThis.data.email,
      globalThis.data.body,
      'h1',
      'Thank You for your Message!'
    );
  });
  it('Submit form error', function () {
    contactUs_PO.contactFormSubmission(
      globalThis.data.first_name,
      globalThis.data.last_name,
      ' ',
      'Hello World!',
      'body',
      'Error: Invalid email address'
    );
  });
});
