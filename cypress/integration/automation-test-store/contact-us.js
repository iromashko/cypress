/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () => {
  it('Submit form success', () => {
    cy.visit('https://www.automationteststore.com/');
    // cy.get('.info_links_footer > :nth-child(5) > a').click();
    cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get('#ContactUsFrm_first_name').type('Joe');
    cy.get('#ContactUsFrm_email').type('joe@email.com');
    cy.get('#ContactUsFrm_enquiry').type(
      'lorem ipsum dolor sit amet, consectetur adipiscing elit'
    );
    cy.get('.col-md-6 > .btn').click();
  });
});
